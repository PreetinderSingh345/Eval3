import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Main from '..';
import makeRequest from '../../../Utils/makeRequest';
import mockData from '../../../mocks/mockEventsData';

jest.mock('../../../Utils/makeRequest', () => jest.fn());

describe('Main', () => {
  it('should render the FilterBox and the Events component', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Main />);

    await waitFor(() => {
      expect(screen.getByTestId('filter-box')).toBeInTheDocument();
      expect(screen.getByTestId('events')).toBeInTheDocument();
    });
  });
});
