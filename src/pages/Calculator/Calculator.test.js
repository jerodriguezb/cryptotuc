import React from 'react';
import { fireEvent } from '@testing-library/react';
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

test('Simulates selection Rates', () => {
  const { getByTestId, getAllByTestId } = renderWithProviders(<BrowserRouter>
   <Calculator /></BrowserRouter>);
  fireEvent.change(getByTestId('select-rates'), { target: { value: 'rwandan-franc' } });
  const options = getAllByTestId('select-rates');
  expect(options[0].selected).toBe('rwandan-franc');
});

describe('Calculator Test', () => {
  test('Deberia devolver un valor float', () => {
    renderWithProviders(<Calculator />);
    const valorCalculado = 0.0222;
    expect(typeof valorCalculado === 'number').toBe(true);
  });
});

test('Only Numbers', () => {
  const val = 0;
  // eslint-disable-next-line prefer-regex-literals
  const regX = new RegExp(/^[0-9]*$/);
  expect(val).toBeTruthy(regX);
});
