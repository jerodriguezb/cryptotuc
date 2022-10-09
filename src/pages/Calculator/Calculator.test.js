import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test/test-utils';
import Calculator from './Calculator';

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
  priceUsd: 0,
},
];

const ratesMockData = [{
  id: 'argentine-peso',
  symbol: 'ARS',
  currencySymbol: '$',
  type: 'fiat',
  rateUsd: 0.00001,
}, {
  id: 'united-states-dollar',
  symbol: 'USD',
  currencySymbol: '$',
  type: 'fiat',
  rateUsd: 1,
},
];

describe('Calculator Test', () => {
  test('Deberia renderizar el componente Calculator', async () => {
    renderWithProviders(<BrowserRouter><Calculator
      coins={coinsMockData} rates={ratesMockData} /></BrowserRouter>);
    const element = screen.getByText('Calculadora');

    expect(element).toBeInTheDocument();
  });

  test('Deberia simular una conversion involucrando a todos los elementos de la calculadora', async () => {
    renderWithProviders(<BrowserRouter><Calculator
      coins={coinsMockData} rates={ratesMockData} /></BrowserRouter>);
    const coinSelector = screen.getByTestId('coin-selector');
    const cryptoSelector = screen.getByTestId('crypto-selector');
    const coinInput = screen.getByTestId('coin-value');
    const cryptoInput = screen.getByTestId('crypto-value');

    await waitFor(() => {
      fireEvent.change(coinSelector, { target: { value: 'ARS' } });
      expect(screen.getByText('ARS')).toBeInTheDocument();

      fireEvent.change(cryptoSelector, { target: { value: 'USD' } });
      expect(screen.getByText('USD')).toBeInTheDocument();

      fireEvent.change(coinInput, { target: { value: '3000000' } });
      expect(cryptoInput.value * 1).toBeGreaterThanOrEqual(0);
    });
  });
});
