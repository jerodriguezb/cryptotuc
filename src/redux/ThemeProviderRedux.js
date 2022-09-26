import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'dark' },
  reducers: {
    setThemeLight(state) {
      state.theme = 'light';
      console.log('lay');
    },
    setThemeDefault(state) {
      state.theme = 'dark';
      console.log('dar');
    },
  },
});

export const { setThemeLight, setThemeDefault } = themeSlice.actions;
export default themeSlice.reducer;
