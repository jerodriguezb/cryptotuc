import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from './utils/test/test-utils';
import App from './App';

describe('App tests', () => {
  test('Deberia renderizar el componente App', () => {
    renderWithProviders(<BrowserRouter><App /></BrowserRouter>);
    const element = screen.getByTestId('app');

    expect(element).toBeInTheDocument();
  });
});
