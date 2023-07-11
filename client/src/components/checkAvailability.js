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
            availability.find((avail) => avail.day === day) && ( // Only render the day if there is an availability for it
              <div key={day}>
                <button
                  className={`dayButton ${
                    selectedDay === day ? "selected" : ""
                  } ${isDarkMode ? "dark" : ""}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
                {selectedDay === day && (
                  <div
                    className={`availability-details ${
                      isDarkMode ? "dark" : ""
                    }`}
                  >
                    {(() => {
                      const selectedDayAvailability = availability.find(
                        (avail) => avail.day === selectedDay
                      );
                      return (
                        <>
                          <p>Free spaces: {selectedDayAvailability.spaces}</p>
                          <p>
                            Starting hour: {selectedDayAvailability.start_time}
                          </p>
                          <p>Duration: {selectedDayAvailability.duration}</p>
                        </>
                      );
                    })()}
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
