import React, { useState } from "react";

const mockData = {
  Monday: { spaces: 10, start: "10:00 AM", duration: "2 hours" },
  Tuesday: { spaces: 7, start: "11:00 AM", duration: "3 hours" },
  Wednesday: { spaces: 5, start: "12:00 PM", duration: "2 hours" },
  Thursday: { spaces: 12, start: "9:00 AM", duration: "2 hours" },
  Friday: { spaces: 15, start: "10:00 AM", duration: "2 hours" },
  Saturday: { spaces: 20, start: "11:00 AM", duration: "3 hours" },
  Sunday: { spaces: 5, start: "12:00 PM", duration: "2 hours" },
};

const CheckAvailability = ({ onClose, isDarkMode, availability }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  return (
    <div className={`overlay ${isDarkMode ? "dark" : ""}`}>
      <div className={`checkAvailability ${isDarkMode ? "dark" : ""}`}>
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        {Object.keys(availability).map((day) => (
          <div key={day}>
            <button
              className={`dayButton ${selectedDay === day ? "selected" : ""}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
            {selectedDay === day && (
              <div className="availability-details">
                <p>Free spaces: {mockData[selectedDay].spaces}</p>
                <p>Starting hour: {mockData[selectedDay].start}</p>
                <p>Duration: {mockData[selectedDay].duration}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckAvailability;
