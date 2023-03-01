import React from 'react';
import './Event.css';

function Event() {
  return (
    <div className="event">
      <img src="" alt="" className="event-img" />
      <span className="event-name">Name</span>
      <p className="event-description">
        This is some sample description This is some sample description This is
        some sample description This is some sample description
      </p>
      <span className="venue">Venue</span>
      <span className="date-time">DateTime</span>
      <div className="registered-bookmarked">
        <span>Registered</span>
        <span>Bookmarked</span>
      </div>
    </div>
  );
}

export default Event;
