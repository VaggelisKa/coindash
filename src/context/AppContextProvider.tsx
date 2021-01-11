import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = (settings: string) => void;

interface AppContextValues {
  savedSettings: { settings: string, firstVisit: boolean }
  confirmSettings: ConfirmSettings
}

const initialState: AppContextValues = {
  savedSettings: { settings: '', firstVisit: false },
  confirmSettings: () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useState({settings: '', firstVisit: false});

  useEffect(() => {
    const coindashData = JSON.parse(localStorage.getItem('coindash') as string);

    if (!coindashData) {
      setSavedSettings({
        settings: '',
        firstVisit: true
      });
    } else {
      setSavedSettings({
        settings: coindashData,
        firstVisit: false
      });
    }
  }, []);

  const confirmSettings: ConfirmSettings = (settings: string) => {
    if (!settings) return;

    localStorage.setItem('coindash', JSON.stringify({settings}));
    setSavedSettings({settings, firstVisit: false});
  };

  return (
    <AppContext.Provider
      value={{
        savedSettings,
        confirmSettings
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
