/* eslint-disable class-methods-use-this */
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test/test-utils';
import Chart from './Chart';

const coinsMockData = [{
  id: 'bitcoin',
  symbol: 'BTC',
  name: 'Bitcoin',
  priceUsd: 20000,
},
{
  id: 'ethereum',
  symbol: 'ETH',
  name: 'Ethereum',
  priceUsd: 2000,
},
];
class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

describe('Chart tests', () => {
  test('Deberia renderizar el componente Chart', () => {
    renderWithProviders(<BrowserRouter><Chart coins={coinsMockData} /></BrowserRouter>);
    const element = screen.getByTestId('graphic');

    expect(element).toBeInTheDocument();
  });

  test('Deberia encontrar el selector de monedas', async () => {
    renderWithProviders(<BrowserRouter><Chart coins={coinsMockData} /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.getByText('BTC')).toBeInTheDocument();
    });
  });

  test('Deberia cambiar el valor del selector de monedas', () => {
    renderWithProviders(<BrowserRouter><Chart coins={coinsMockData} /></BrowserRouter>);
    const element = screen.getByTestId('crypto-selector');
    fireEvent.change(element, { target: { value: 'ETH' } });
  });

  test('Deberia encontrar el grafico', async () => {
    renderWithProviders(<BrowserRouter><Chart coins={coinsMockData} /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
