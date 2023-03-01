import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Event from '..';

describe('Event', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Event />);

    expect(asFragment()).toMatchSnapshot();
  });
});
