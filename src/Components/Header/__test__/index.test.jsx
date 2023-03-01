import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render the heading correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText('EVENTIFY')).toBeInTheDocument();
  });
});
