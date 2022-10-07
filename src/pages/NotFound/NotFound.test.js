import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test/test-utils';
import NotFound from './NotFound';

describe('NotFound page test', () => {
  test('Deberia renderizar la pagina NotFound', () => {
    renderWithProviders(<BrowserRouter><NotFound /></BrowserRouter>);
    const element = screen.getByText('404 not found');

    expect(element).toBeInTheDocument();
  });
});
