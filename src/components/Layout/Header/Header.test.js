import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test/test-utils';
import Header from './Header';

describe('Header Test', () => {
  test('Deberia renderizar el componente Header', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByText('CryptoTuc');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el componente Header', () => {
    const selectCountry = jest.fn();
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);

    expect(selectCountry).toHaveBeenCalled();
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Light', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);

    expect(element).toHaveClass('btn-light');
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Dark', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);
    fireEvent.click(element);

    expect(element).toHaveClass('btn-dark');
  });

  test('Deberia renderizar el componente Header y llamar la funcion selectCountry', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('rfs-btn');
    fireEvent.click(element);
    fireEvent.click(screen.getByText('USD'));
    expect(screen.getByText('USD')).toBeInTheDocument();
  });
});
