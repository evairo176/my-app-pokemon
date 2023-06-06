import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { CopyToClipboard } from "react-copy-to-clipboard";

function VideoChat() {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const socketRef = useRef();
  const userVideoRef = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3001");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        console.log(stream);

        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream;
        }

        socketRef.current.emit("join room", roomId);

        socketRef.current.on("all users", (users) => {
          const newPeers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            newPeers.push(peer);
          });
          setPeers(newPeers);
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });
          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        socketRef.current.on("user left", (id) => {
          const peer = peersRef.current.find((p) => p.peerID === id);
          if (peer) {
            peer.peer.destroy();
          }
          const newPeers = peersRef.current.filter((p) => p.peerID !== id);
          peersRef.current = newPeers;
          setPeers(newPeers.map((p) => p.peer));
        });
      });
  }, [roomId]);

  const createPeer = (userToSignal, callerID, stream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  };
  const addPeer = (incomingSignal, callerID, stream) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  };

  const handleMuteToggle = () => {
    setIsMuted((prevMuted) => !prevMuted);
    stream.getAudioTracks()[0].enabled = !isMuted;
  };

  const handleCopyRoomId = () => {
    const roomIdInput = document.getElementById("room-id-input");
    roomIdInput.select();
    document.execCommand("copy");
  };

  const handleJoinRoom = () => {
    if (roomId.trim !== "") {
      setIsConnected(true);
    }
  };
  return (
    <div className="video-chat-container">
      {isConnected && (
        <div className="video-chat">
          <div className="user-video-container">
            <video
              className="user-video"
              muted
              ref={userVideoRef}
              autoPlay
              playsInline
            />
          </div>
          <div className="remote-videos-container">
            {peers.map((peer, index) => (
              <video
                key={index}
                className="remote-video"
                ref={(videoRef) =>
                  videoRef && peer.addStream(videoRef.srcObject)
                }
                autoPlay
                playsInline
                style={{ height: 400 }}
              />
            ))}
          </div>
          <div className="controls">
            <button className="mute-button" onClick={handleMuteToggle}>
              {isMuted ? "Unmute" : "Mute"}
            </button>
            <div className="room-id">
              <input id="room-id-input" type="text" value={roomId} readOnly />
              <CopyToClipboard text={roomId} onCopy={handleCopyRoomId}>
                <button className="copy-button">Copy</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      )}
      {isConnected ? (
        ""
      ) : (
        <div className="join-room">
          <input
            className="room-id-input"
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button className="join-button" onClick={handleJoinRoom}>
            Join Room
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoChat;
