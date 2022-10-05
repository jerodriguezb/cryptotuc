import { screen, render } from '@testing-library/react';
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

  test('Deberia renderizar el componente Criptolist', () => {
    renderWithProviders(<CriptoList/>);
    const element = screen.getbyTestId('list');
    expect(element).toBeInTheDocument();
  });
});
