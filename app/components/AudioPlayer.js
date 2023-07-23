"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <div className={styles.AudioPlayer}>
      <audio
        ref={audioPlayer}
        src="https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview"
        preload="metadata"
      ></audio>
      <button className={styles.forwardBackward}>
        <BsArrowLeftShort /> 30
      </button>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward}>
        30 <BsArrowRightShort />
      </button>

      {/*current time */}
      <div className={styles.currentTime}>0:00</div>

      {/*progress bar */}
      <div>
        <input type="range" className={styles.progressBar} />
      </div>

      {/* duration */}
      <div className={styles.duration}>
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
