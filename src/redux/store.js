import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './ThemeProviderRedux';
import charactersSlice from './characterProviderRedux';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    characters: charactersSlice,
  },
  devTools: true,
});

export default store;
