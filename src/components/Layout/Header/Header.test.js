import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test/test-utils';
import Header from './Header';

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

describe('Header Test', () => {
  test('Deberia renderizar el componente Header', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData} /></BrowserRouter>);
    const element = screen.getByText('CryptoTuc');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el componente Header', async () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData} /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.getByText('Seleccione su pais')).toBeInTheDocument();
    });
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Light', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData} /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);

    expect(element).toHaveClass('btn-light');
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Dark', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData} /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);
    fireEvent.click(element);

    expect(element).toHaveClass('btn-dark');
  });

  test('Deberia renderizar el componente Header y llamar la funcion selectCountry', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData} /></BrowserRouter>);
    const element = screen.getByTestId('rfs-btn');
    fireEvent.click(element);
    fireEvent.click(screen.getByText('USD'));
    expect(screen.getByText('USD')).toBeInTheDocument();
  });
});
