import { render, screen, fireEvent } from '@testing-library/react';
import CoinHistory from './CoinHistory';

const testElementId = 'coin-line';

describe('CoinHistory test', () => {
  test('Esperamos que no renderice el componente CoinHistory', () => {
    render(<CoinHistory />);
    const element = screen.queryByText(testElementId);
    expect(element).not.toBeInTheDocument();
  });
});
