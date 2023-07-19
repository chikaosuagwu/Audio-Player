import React from "react";

const AudioPlayer = () => {
  return (
    <div>
      <audio
        src="https://www.naijaloaded.com.ng/download-music/wizkid-joro-mp3"
        preload="metadata"
      ></audio>
      <button>back 30</button>
      <button>Play/Pause</button>
      <button>forward 30</button>

      {/*current time */}
      <div>0:00</div>

      {/*progress bar */}
      <div>
        <input type="range" />
      </div>

      {/* duration */}
      <div>2:48</div>
    </div>
  );
};

export default AudioPlayer;
