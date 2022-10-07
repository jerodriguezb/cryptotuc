import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test-utils';
import SearchBox from './SearchBox';

describe('SeachBox Test', () => {
  test('imput text test funcion filter', () => {
    renderWithProviders(<SearchBox/>);
    const element = screen.getByText('Buscar bitcoin o btc');
    expect(element).toBeInTheDocument();
  });
});
