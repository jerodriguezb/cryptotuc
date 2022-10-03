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
    const setDefault = jest.fn();

    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);

    expect(setDefault).toHaveBeenCalled();
  });

  test('Deberia renderizar el componente Header con theme Light', () => {
    const setLight = jest.fn();

    renderWithProviders(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByTestId('theme-switch');
    fireEvent.click(element);

    expect(setLight).toHaveBeenCalled();
  });
});
