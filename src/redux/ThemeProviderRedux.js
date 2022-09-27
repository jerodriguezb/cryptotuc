import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'dark' },
  reducers: {
    setThemeLight(state) {
      state.theme = 'light';
    },
    setThemeDefault(state) {
      state.theme = 'dark';
    },
  },
});

export const { setThemeLight, setThemeDefault } = themeSlice.actions;
export default themeSlice.reducer;
