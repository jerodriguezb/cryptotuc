import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './ThemeProviderRedux';
import charactersSlice from './CoinProviderRedux';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    coin: charactersSlice,
  },
  devTools: true,
});

export default store;
