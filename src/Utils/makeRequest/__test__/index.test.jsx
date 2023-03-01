import React from 'react';
import makeRequest from '..';
import axios from 'axios';
import {
  BACKEND_URL,
  GET_ALL_EVENTS,
  UPDATE_EVENT_BOOKMARK_REGISTERATION,
} from '../../../Constants/apiEndPoints';
import mockData from '../../../mocks/mockEventsData';

jest.mock('axios');

describe('makeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make api call with appropriate request options and return response body when only api endpoint is specified', async () => {
    axios.mockResolvedValue({ data: mockData });

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(GET_ALL_EVENTS);

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: '/api/events',
      method: 'get',
    });

    expect(response).toEqual(mockData);
  });

  it('should make api call with appropriate request options and return response body when api endpoint and request body are specified', async () => {
    axios.mockResolvedValue({ data: 'Event Updated!!!' });

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(UPDATE_EVENT_BOOKMARK_REGISTERATION(1), {
      data: {
        isBookmarked: true,
      },
    });

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: '/api/events/1',
      method: 'patch',
      data: {
        isBookmarked: true,
      },
    });

    expect(response).toEqual('Event Updated!!!');
  });
});
