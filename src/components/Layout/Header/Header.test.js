import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test/test-utils';
import Header from './Header';
import { ipCountryMockData, ratesMockData } from '../../../utils/test/mock-data';

describe('Header Test', () => {
  test('Deberia renderizar el componente Header', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData}
      ipData={ipCountryMockData} /></BrowserRouter>);
    const element = screen.getByText('CryptoTuc');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el componente Header', async () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData}
      ipData={ipCountryMockData} /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.getByText('Seleccione su pais')).toBeInTheDocument();
    });
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Light', async () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData}
      ipData={ipCountryMockData} /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    await waitFor(() => {
      fireEvent.click(element);
      expect(element).toHaveClass('btn-light');
    });
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Dark', async () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData}
      ipData={ipCountryMockData} /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    await waitFor(() => {
      fireEvent.click(element);
      fireEvent.click(element);
      expect(element).toHaveClass('btn-dark');
    });
  });

  test('Deberia renderizar el componente Header y llamar la funcion selectCountry', () => {
    renderWithProviders(<BrowserRouter><Header rates={ratesMockData}
      ipData={ipCountryMockData} /></BrowserRouter>);
    const element = screen.getByTestId('rfs-btn');
    fireEvent.click(element);
    fireEvent.click(screen.getByText('USD'));
    expect(screen.getByText('USD')).toBeInTheDocument();
  });
});
