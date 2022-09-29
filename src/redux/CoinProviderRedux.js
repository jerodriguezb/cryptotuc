import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {},
  reducers: {
    setCoin(state, action) {
      state.coin = action.payload;
    },
  },
});

export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;
