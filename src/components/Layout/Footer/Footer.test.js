import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test-utils';
import Footer from './Footer';

describe('Footer tests', () => {
  test('Deberia renderizar el componente Footer', () => {
    renderWithProviders(<Footer />);
    const element = screen.getByText('CryptoTuc');

    expect(element).toBeInTheDocument();
  });
});
