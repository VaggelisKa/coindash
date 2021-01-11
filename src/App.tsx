import React from 'react';
import { registerRootComponent } from 'expo';
import AppContextProvider from 'context/AppContextProvider';

import TabsFooter from 'components/tabs-footer';
import Header from 'components/header';

const App = () => {
  return (
    <>
      <Header />
      <TabsFooter />
    </>
  );
};


export default registerRootComponent(App);
