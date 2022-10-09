import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CryptoItems, SearchBox } from '../../components/CoinCotizer';
import { renderWithProviders } from '../../utils/test/test-utils';
import CoinCotizer from './CoinCotizer';

const data = [{
  id: 'bitcoin',
  symbol: 'BTC',
  name: 'Bitcoin',
  priceUsd: 20000,
},
{
  id: 'ethereum',
  symbol: 'ETH',
  name: 'Ethereum',
  priceUsd: 0,
},
];

describe('CoinCotizer Test', () => {
  test('Deberia renderizar el componente CoinCotizer', () => {
    renderWithProviders(<BrowserRouter><CoinCotizer coins={data} /></BrowserRouter>);
    const element = screen.getByText('Cotizador');
    expect(element).toBeInTheDocument();
  });

  test('render Items', async () => {
    renderWithProviders(<BrowserRouter><CoinCotizer coins={data} /></BrowserRouter>);

    await expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  });

  test('Deberia renderizar el componente SearchBox', async () => {
    const setFilteredCoins = jest.fn();
    renderWithProviders(<BrowserRouter><SearchBox
      allCoins={data} setFilteredCoins={setFilteredCoins} />
      <CryptoItems coins={data} /></BrowserRouter>);
    const element = screen.getByPlaceholderText('Ingrese bitcoin o btc');
    await waitFor(() => {
      fireEvent.change(element, { target: { value: '' } });
      fireEvent.change(element, { target: { value: 'B' } });
      fireEvent.change(element, { target: { value: '' } });
      fireEvent.change(element, { target: { value: 'Ethereum' } });
      expect(screen.getByText('ETH')).toBeInTheDocument();
      expect(setFilteredCoins).toHaveBeenCalled();
    });
  });
});
