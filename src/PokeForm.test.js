import { render, fireEvent, screen, wait } from '@testing-library/react'
import PokeForm from './PokeForm';
import axios from 'axios';
jest.mock('axios');

// 2
test('renders a pokemon search form', () => {
  // given / when
  render(<PokeForm />);

  // then
  expect(screen.getByRole('textbox', { name: 'Nom du pokemon' })).toBeInTheDocument();
});

// 3
test('it should be possible to search a pokemon', () => {
  // given / when
  render(<PokeForm />);

  // then
  expect(screen.getByRole('button', { name: 'Chercher ce pokemon' })).toBeInTheDocument();
});

// 5
test('it should show pokemon picture when validing form', async () => {
  // given 
  render(<PokeForm />);
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: { sprites: { back_default: 'une-url' } } }));

  // when
  const input = screen.getByLabelText("Nom du pokemon");
  fireEvent.change(input, { target: { value: 'pikachu' } })
  await fireEvent.click(screen.getByRole('button'));

  // then
  const image = screen.getByAltText('pokemon best profile');
  expect(image.src).toContain('une-url');
});
