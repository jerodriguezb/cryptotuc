import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {},
  reducers: {
    setCharacters(state, action) {
      state.results = action.payload.data.results;
    },
  },
});

export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;
