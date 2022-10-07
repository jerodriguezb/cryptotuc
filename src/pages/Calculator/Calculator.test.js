import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/test/test-utils';
import Calculator from './Calculator';

test('Simulates selection', () => {
  const { getByTestId, getAllByTestId } = renderWithProviders(<BrowserRouter>
  <Calculator /></BrowserRouter>);
  // The value should be the key of the option
  fireEvent.change(getByTestId('select-coins'), { target: { value: 'bitcoin' } });
  const options = getAllByTestId('select-coins');
  expect(options[0].selected).toBe('bitcoin');
});

describe('NotFound page test', () => {
  test('Deberia renderizar Crypto Calculator', () => {
    renderWithProviders(<BrowserRouter><Calculator /></BrowserRouter>);
    const element = screen.getByText('Seleccione moneda');

    expect(element).toBeInTheDocument();
  });
});

test('Simulates selection Rates', () => {
  const { getByTestId, getAllByTestId } = renderWithProviders(<BrowserRouter>
   <Calculator /></BrowserRouter>);
  fireEvent.change(getByTestId('select-rates'), { target: { value: 'rwandan-franc' } });
  const options = getAllByTestId('select-rates');
  expect(options[0].selected).toBe('rwandan-franc');
});

// describe('Calculator Test', () => {
//   test('Deberia devolver un valor float', () => {
//     renderWithProviders(<Calculator />);
//     const valorCalculado = 0.0222;
//     expect(typeof valorCalculado === 'number').toBe(true);
//   });
// });

// test('Only Numbers', () => {
//   const val = 0;
//   // eslint-disable-next-line prefer-regex-literals
//   const regX = new RegExp(/^[0-9]*$/);
//   expect(val).toBeTruthy(regX);
// });

// test('Simulates selection Rates', async () => {
//   renderWithProviders(<BrowserRouter> <Calculator /></BrowserRouter>);
//   const val = 'argentine-peso';
//   fireEvent.click(screen.findByTestId('select-rates'));
//   await fireEvent.click(screen.getByText(val));
//   expect(val).toBeInTheDocument();
// });
