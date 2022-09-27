import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './ThemeProviderRedux';
import coinSlice from './CoinProviderRedux';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    coin: coinSlice,
  },
  devTools: true,
});

export default store;
