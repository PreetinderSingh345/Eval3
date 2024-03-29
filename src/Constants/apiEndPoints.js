export const BACKEND_URL = 'http://localhost:8000';

export const GET_ALL_EVENTS = {
  url: '/api/events',
  method: 'get',
};

export const GET_EVENT_BY_ID = (eventId) => ({
  url: `/api/events/${eventId}`,
  method: 'get',
});

export const UPDATE_EVENT_BOOKMARK_REGISTERATION = (eventId) => ({
  url: `/api/events/${eventId}`,
  method: 'patch',
});

export const GET_THEMES = {
  url: '/api/themes',
  method: 'get',
};

export const SAVE_THEME = {
  url: '/api/themes',
  method: 'put',
};
