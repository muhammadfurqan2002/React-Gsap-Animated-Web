import React from "react";

function Video() {
  return (
    <div className="h-full w-full">
      <video autoPlay playsInline loop muted className="h-full w-full object-cover" src="../../../public/video.mp4" />
    </div>
  );
}

export default Video;
