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

  test('Deberia renderizar el componente Header con theme Dark', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    expect(element).toHaveClass('btn-dark');
  });

  test('Deberia renderizar el componente Header y cambiarlo a theme Light', () => {
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);

    expect(element).toHaveClass('btn-light');
  });

  test('Deberia renderizar el componente Header y llamar la funcion selectCountry', () => {
    const selectCountry = jest.fn();
    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('rfs');
    console.log(element);
    fireEvent.select(element);

    expect(selectCountry).toHaveBeenCalled();
  });
});
