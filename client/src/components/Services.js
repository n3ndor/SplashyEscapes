import React, { useState } from "react";
import partyVideo from "../media/party.mp4";
import competitionVideo from "../media/competition.mp4";
import babyVideo from "../media/baby.mp4";
import trainingVideo from "../media/training.mp4";
import saunaImage from "../media/sauna.jpg";
import waterWorldImage from "../media/water_world.jpg";
import divingImage from "../media/diving.jpg";

import CheckAvailability from "./checkAvailability";

const Services = ({ isDarkMode }) => {
  const [availability, setAvailability] = useState(null);

  const fetchAvailability = (serviceId) => {
    fetch(`http://localhost:5000/api/services/${serviceId}/availability`)
      .then((response) => response.json())
      .then((data) => setAvailability(data));
  };

  const checkHandle = () => {
    setAvailability(!availability);
  };
  return (
    <div className={`page ${isDarkMode ? "dark" : ""}`}>
      <div className="grid-container ">
        <div className="grid-item full-width">
          <h2>Our Services</h2>
          <p>
            Discover a world where all your desires for fun, excitement, and
            relaxation come to life. Our services cater to everyone, making sure
            you find exactly what you're looking for. Dive into our offerings
            listed below, and find an activity that suits your interests.
            Availability is just a click away, simply select 'Check
            Availability' and secure your spot. Join us to immerse yourself in
            an experience where laughter, excitement, and cherished memories
            abound
          </p>
        </div>
        <div className="grid-item two-thirds-right">
          <video src={partyVideo} autoPlay loop muted />
        </div>
        <div className="grid-item text-third-right">
          <h2>Pool Party</h2>
          <p>
            Immerse yourself in the joy and laughter of our pool parties. With
            an electrifying atmosphere, great music, and friendly faces all
            around, our pool parties are the epitome of fun. Our dedicated staff
            ensure a seamless and unforgettable experience. Join us and turn
            your ordinary days into extraordinary celebrations!
          </p>
          <button
            className={`checkButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => fetchAvailability(1)}
          >
            Check Availability
          </button>
        </div>
        <div className="grid-item text-third-left">
          <h2>Competitive Swim Championship</h2>
          <p>
            Experience the thrill of competition in our state-of-the-art
            swimming pools. Perfect for both seasoned swimmers and those
            aspiring to compete, our swim championships provide a platform to
            test your skills and push your limits. With our experienced staff to
            guide you, every stroke takes you one step closer to victory.
          </p>
          <button
            className={`checkButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => fetchAvailability(2)}
          >
            Check Availability
          </button>
        </div>
        <div className="grid-item two-thirds-left">
          <video src={competitionVideo} autoPlay loop muted />
        </div>
        <div className="grid-item two-thirds-right">
          <video src={babyVideo} autoPlay loop muted />
        </div>
        <div className="grid-item text-third-right">
          <h2>Baby Course</h2>
          <p>
            Introduce your little ones to the joy of water in a safe and
            nurturing environment with our Baby Course. Under the watchful eyes
            of our certified professionals, your baby can have fun, develop
            essential skills, and grow confident in the water. Join us for an
            experience filled with adorable moments and precious memories.
          </p>
          <button
            className={`checkButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => fetchAvailability(3)}
          >
            Check Availability
          </button>
        </div>
        <div className="grid-item text-third-left">
          <h2>Female Synchronized Swimming</h2>
          <p>
            Discover the grace and beauty of synchronized swimming. Whether
            you're a beginner or have previous experience, our expert
            instructors will guide you through every move, helping you to
            perfect your form and rhythm. Come join us and be a part of this
            enchanting aquatic ballet!
          </p>
          <button
            className={`checkButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => fetchAvailability(4)}
          >
            Check Availability
          </button>
        </div>
        <div className="grid-item two-thirds-left">
          <video src={trainingVideo} autoPlay loop muted />
        </div>
        <div className="grid-item full-width">
          <p>Stay tuned for more events!</p>
          <div className="images">
            <img src={saunaImage} alt="Sauna" />
            <img src={waterWorldImage} alt="Water world" />
            <img src={divingImage} alt="Diving" />
          </div>
        </div>
      </div>
      {availability && (
        <CheckAvailability onClose={checkHandle} availability={availability} />
      )}
    </div>
  );
};

export default Services;
