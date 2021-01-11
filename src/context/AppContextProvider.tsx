import React, { createContext, ReactChild } from 'react';

interface Props {
  children: ReactChild | ReactChild[]
}

interface AppContextValues {}

const initialState: AppContextValues = {};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
