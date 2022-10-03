import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test/test-utils';
import Home from './Home';

describe('Header Test', () => {
  test('Deberia renderizar el componente Home', () => {
    renderWithProviders(<Home />);
    const element = screen.getByText('Garantia y confianza para todas tus operaciones');

    expect(element).toBeInTheDocument();
  });
});
