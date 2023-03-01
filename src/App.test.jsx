import { render, screen } from '@testing-library/react';
import App from './App';

it('should render correctly', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
