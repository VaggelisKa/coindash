import React from 'react';
import { registerRootComponent } from 'expo';

import TabsFooter from 'components/tabs-footer';
import Header from 'components/header';
import AppContextProvider from 'context/AppContextProvider';

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <TabsFooter />
    </AppContextProvider>
  );
};


export default registerRootComponent(App);
