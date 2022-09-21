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

// para el dispatch
export const { setThemeLight, setThemeDefault } = themeSlice.actions;
// para el configure
export default themeSlice.reducer;
