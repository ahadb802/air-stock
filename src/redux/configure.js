import { configureStore } from '@reduxjs/toolkit';
import Reducer from './home-reducer';

const store = configureStore({
  reducer: {
    coin: Reducer,
  },
});

export default store;
