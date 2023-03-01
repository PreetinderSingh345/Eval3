import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FilterBox from '..';

describe('FilterBox', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterBox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
