import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Events.css';
import Event from '../Event';
import makeRequest from '../../Utils/makeRequest';
import { GET_ALL_EVENTS } from '../../Constants/apiEndPoints';

function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    makeRequest(GET_ALL_EVENTS)
      .then((response) => {
        response.sort((event1, event2) => {
          return new Date(event1.datetime) - new Date(event2.datetime);
        });

        response.forEach((event, index) => {
          response[index].datetime = new Date(event.datetime).toLocaleString();
        });

        setEvents(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      {events ? (
        <div id="events">
          {events.map((event) => {
            return (
              <Event
                key={uuidv4()}
                id={event.id}
                img={event.imgUrl}
                name={event.name}
                description={event.description}
                venue={event.venue}
                datetime={event.datetime}
                areSeatsAvailable={event.areSeatsAvailable}
                isRegistered={event.isRegistered}
                isBookmarked={event.isBookmarked}
              />
            );
          })}
        </div>
      ) : (
        <div id="loading">Loading...</div>
      )}
    </>
  );
}

export default Events;
