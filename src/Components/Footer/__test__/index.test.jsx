import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../';
import makeRequest from '../../../Utils/makeRequest';
import mockData from '../../../mocks/mockThemesData';

jest.mock('../../../Utils/makeRequest', () => jest.fn());

describe('Footer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the themes heading correctly', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Footer />);

    await waitFor(() => {
      expect(screen.getByTestId('themes')).toBeInTheDocument();
    });
  });

  it('should render the theme icons correctly', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Footer />);

    await waitFor(() => {
      expect(screen.getAllByTestId('theme-icon')).toHaveLength(4);
    });
  });
});
