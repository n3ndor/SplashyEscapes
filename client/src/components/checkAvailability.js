import React, { useState } from "react";

const CheckAvailability = ({ onClose, isDarkMode, availability }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayClick = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  return (
    <div className={`overlay ${isDarkMode ? "dark" : ""}`}>
      <div className={`checkAvailability ${isDarkMode ? "dark" : ""}`}>
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        {days.map(
          (day, idx) =>
            availability[idx] && ( // Only render the day if there is an availability for it
              <div key={day}>
                <button
                  className={`dayButton ${
                    selectedDay === idx ? "selected" : ""
                  }`}
                  onClick={() => handleDayClick(idx)}
                >
                  {day}
                </button>
                {selectedDay === idx && (
                  <div className="availability-details">
                    <p>Free spaces: {availability[selectedDay].spaces}</p>
                    <p>Starting hour: {availability[selectedDay].start_time}</p>
                    <p>Duration: {availability[selectedDay].duration}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CheckAvailability;
