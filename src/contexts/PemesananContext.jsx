import { createContext, useContext, useEffect, useReducer } from 'react';

const StateContext = createContext({
  pemesananBarang: null,
  totalBarang: 0,
  jumlahBarang: 0,
});
StateContext.displayName = 'PemesananState';

const DispatchContext = createContext(null);
