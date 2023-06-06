import React from "react";
import VideoChat from "../../components/moleculars/VideoChat";
import TemplateComponent from "../../components/atoms/TemplateComponent";
import Gap from "../../components/atoms/Gap";

function VideoCall() {
  return (
    <TemplateComponent>
      <Gap height={50} />
      <VideoChat />
    </TemplateComponent>
  );
}

export default VideoCall;
