import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CryptoItems, SearchBox } from '../../components/CoinCotizer';
import { renderWithProviders } from '../../utils/test/test-utils';
import CoinCotizer from './CoinCotizer';
import { coinsMockData } from '../../utils/test/mock-data';

describe('CoinCotizer Test', () => {
  test('Deberia renderizar el componente CoinCotizer', () => {
    renderWithProviders(<BrowserRouter><CoinCotizer coins={coinsMockData} /></BrowserRouter>);
    const element = screen.getByText('Cotizador');
    expect(element).toBeInTheDocument();
  });

  test('render Items', async () => {
    renderWithProviders(<BrowserRouter><CoinCotizer coins={coinsMockData} /></BrowserRouter>);
    await expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  });

  test('Deberia renderizar el componente SearchBox', async () => {
    const setFilteredCoins = jest.fn();
    renderWithProviders(<BrowserRouter><SearchBox
      allCoins={coinsMockData} setFilteredCoins={setFilteredCoins} />
      <CryptoItems coins={coinsMockData} /></BrowserRouter>);
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
