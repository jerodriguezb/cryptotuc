import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeSlice from './ThemeProviderRedux';
import coinSlice from './CoinProviderRedux';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    coin: coinSlice,
  },
  devTools: true,
});

const rootReducer = combineReducers({
  theme: themeSlice,
  coin: coinSlice,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
