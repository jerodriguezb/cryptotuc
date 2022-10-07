import { screen, render, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test-utils';
import { CriptoList } from '../index';
import Items from './Items';

describe('CriptoList Test', () => {
  const datos = {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    priceUsd: '19923.1434117442421804',
  };

  test('render Criptolist', () => {
    renderWithProviders(<CriptoList {...datos}/>);
    const element = screen.queryByText(datos.name);
    expect(element).toBeInTheDocument();
  });

  test('render Items', () => {
    renderWithProviders(<Items {...datos}/>);
    const element = screen.queryByRole('li', { name: datos.name });
    expect(element).toBeInTheDocument();
  });

  test('Items-test calc button ', () => {
    renderWithProviders(<Items />);
    const linkButton = screen.findByTestId('calcButton');
    fireEvent.click(linkButton);
    const calculator = screen.getByText('CryptoTuc Calculadora');
    expect(calculator).toBeInTheDocument();
  });
});
