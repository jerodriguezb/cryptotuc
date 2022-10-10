import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test/test-utils';
import Calculator from './Calculator';
import { coinsMockData, ratesMockData } from '../../utils/test/mock-data';

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
    const calcButton = screen.getByText('Calcular');
    await waitFor(() => {
      fireEvent.change(coinSelector, { target: { value: 'ARS' } });
      expect(screen.getByText('ARS')).toBeInTheDocument();

      fireEvent.change(cryptoSelector, { target: { value: 'USD' } });
      expect(screen.getByText('USD')).toBeInTheDocument();

      fireEvent.change(coinInput, { target: { value: '3000000' } });

      fireEvent.click(calcButton);

      expect(cryptoInput.value * 1).toBeGreaterThanOrEqual(0);
    });
  });
});
