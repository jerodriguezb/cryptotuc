import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: {
    id: 'united-states-dollar',
    symbol: 'USD',
    currencySymbol: '$',
    type: 'fiat',
    rateUsd: 1,
  },
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoin(state, action) {
      state.coin = action.payload;
    },
  },
});

export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;
