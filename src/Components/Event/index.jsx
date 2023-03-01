import React from 'react';
import './Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Event() {
  return (
    <div className="event">
      <img src="" alt="" className="event-img" />
      <span className="event-name">NAME</span>
      <p className="event-description">
        This is some sample description This is some sample description This is
        some sample description This is some sample description
      </p>
      <span className="event-venue">VENUE:</span>
      <span className="event-date-time">DATE:</span>
      <div className="event-registered-bookmarked">
        <span className="event-registered">
          <FontAwesomeIcon icon={faCheckCircle} className="event-icons" />
          <span>REGISTERED</span>
        </span>
        <FontAwesomeIcon
          icon={faBookmark}
          className="event-bookmarked event-icons"
        />
      </div>
    </div>
  );
}

export default Event;
