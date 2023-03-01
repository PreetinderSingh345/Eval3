import React from 'react';
import { useState } from 'react';
import './Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBookmark as solidBookmark,
  faCircleXmark,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import makeRequest from '../../Utils/makeRequest';
import { UPDATE_EVENT_BOOKMARK_REGISTERATION } from '../../Constants/apiEndPoints';

function Event({
  id,
  img,
  name,
  description,
  venue,
  datetime,
  areSeatsAvailable,
  isBookmarked,
  isRegistered,
}) {
  const [registered, setRegistered] = useState(isBookmarked);
  const [bookmarked, setBookmarked] = useState(isRegistered);

  function handleBookmarkToggle() {
    makeRequest(UPDATE_EVENT_BOOKMARK_REGISTERATION(id), {
      data: {
        isBookmarked: !bookmarked,
      },
    })
      .then((response) => {
        setBookmarked(!bookmarked);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  function handleRegisterToggle() {
    makeRequest(UPDATE_EVENT_BOOKMARK_REGISTERATION(id), {
      data: {
        isRegistered: !registered,
      },
    })
      .then((response) => {
        setRegistered(!registered);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <div className="event">
      <img src={img} alt="" className="event-img" />
      <span className="event-name">{name}</span>
      <p className="event-description">{description}</p>
      <span className="event-venue">VENUE: {venue}</span>
      <span className="event-date-time">DATE: {datetime}</span>
      <div className="event-registered-bookmarked">
        <span className="event-registered">
          {areSeatsAvailable ? (
            <>
              {registered ? (
                <>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="event-icons"
                    onClick={handleRegisterToggle}
                  />
                  <span>REGISTERED</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    className="event-icons"
                    onClick={handleRegisterToggle}
                  />
                  <span>REGISTER</span>
                </>
              )}
            </>
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="event-bookmarked event-icons"
              onClick={handleRegisterToggle}
            />
          )}
        </span>

        {bookmarked ? (
          <FontAwesomeIcon
            icon={solidBookmark}
            className="event-bookmarked event-icons"
            onClick={handleBookmarkToggle}
          />
        ) : (
          <FontAwesomeIcon
            icon={regularBookmark}
            className="event-bookmarked event-icons"
            onClick={handleBookmarkToggle}
          />
        )}
      </div>
    </div>
  );
}

export default Event;
