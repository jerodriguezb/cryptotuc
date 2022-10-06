import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test/test-utils';
import CoinCotizer from './CoinCotizer';

describe('CoinCotizer Test', () => {
  test('Deberia renderizar el componente CoinCotizer', () => {
    renderWithProviders(<CoinCotizer />);
    const element = screen.getByText('Cotización en tiempo real de las principales criptomonedas. Seguimiento de la evolución de su precio y valor de mercado');
    expect(element).toBeInTheDocument();
  });
});
