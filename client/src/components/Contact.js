import React from "react";
import heroVideoLight from "../media/hero_light.mp4";
import heroVideoDark from "../media/hero_dark.mp4";
import linkPic from "../media/link.png";
import gitPic from "../media/git.png";

const Contact = ({ isDarkMode }) => {
  const videoSource = isDarkMode ? heroVideoDark : heroVideoLight;

  return (
    <div className={`contact ${isDarkMode ? "dark" : ""}`}>
      <video
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      />
      <div className="content">
        <h2>Contact: </h2>
        <div className="contactLinks">
          <a
            href="https://www.linkedin.com/in/nandornagylinked/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkPic} alt="LinkedIn" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://github.com/n3ndor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitPic} alt="GitHub" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
