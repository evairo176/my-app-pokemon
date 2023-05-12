import React, { useState } from "react";
import TemplateComponent from "../../components/atoms/TemplateComponent";
import { useNavigate } from "react-router-dom";

function GoogleMeet() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const joinMeeting = () => {
    var join_value = code;
    var meeting_url = `/live?meetingID=` + join_value;

    navigate(meeting_url);
  };

  const newMeeting = () => {
    var eight_d_value = Math.floor(Math.random() * 100000000);
    var meeting_url = `/live?meetingID=` + eight_d_value;
    navigate(meeting_url);
  };

  return (
    <>
      <TemplateComponent>
        <div className="d-flex align-items-center ">
          <button className="btn btn-primary m-2" onClick={newMeeting}>
            New Meeting
          </button>
          <input
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn btn-success" onClick={joinMeeting}>
            Join
          </button>
        </div>
      </TemplateComponent>
    </>
  );
}

export default GoogleMeet;
