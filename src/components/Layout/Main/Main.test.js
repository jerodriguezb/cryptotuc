import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test/test-utils';
import Main from './Main';

describe('Main tests', () => {
  test('Deberia renderizar el componente Main', () => {
    renderWithProviders(<BrowserRouter><Main /></BrowserRouter>);
    const element = screen.getByTestId('main');

    expect(element).toBeInTheDocument();
  });
});
