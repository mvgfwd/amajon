import React, { useReducer, createContext, useContext } from "react";

// //mempersiapkan state
// export const StateKonteks = createContext();

// //memproses dan mengubah state
// export const stateProvider = ({ children, reducer, initialState }) => (
//   <StateKonteks.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateKonteks.Provider>
// );

// //memakai value yang ada di state
// export const useStateVal = () => useContext(StateKonteks)

//mempersiapkan state
export const StateKonteks = createContext();

//memproses dan mengubah state
export const StateProvider = ({ children, reducer, initialState }) => (
  <StateKonteks.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateKonteks.Provider>
);

//memakai value yang ada di state
export const useStateVal = () => useContext(StateKonteks);
