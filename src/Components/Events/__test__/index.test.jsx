import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Events from '..';
import makeRequest from '../../../Utils/makeRequest';
import mockData from '../../../mocks/mockEventsData';

jest.mock('../../../Utils/makeRequest', () => jest.fn());

describe('Events', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should show the loading text when we're waiting for the data", async () => {
    makeRequest.mockResolvedValue(null);

    render(<Events />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the events correctly', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Events />);

    await waitFor(() => {
      expect(screen.getAllByTestId('event')).toHaveLength(2);
    });
  });
});
