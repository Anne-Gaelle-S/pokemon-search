import {render, screen} from '@testing-library/react';
import App from './App';

// 1
test('renders a beautiful title', () => {
  // given / when
  render(<App />);

  // then
  expect(screen.getByText('Bonjour Zenika !', { selector: 'h1' })).toBeInTheDocument();
});

// 4
test('should show poke form', () => {
  // given / when
  render(<App />);

  // then
  expect(screen.getByText('Recherche de pokemon...')).toBeInTheDocument();
});
