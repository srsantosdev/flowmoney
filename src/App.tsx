import React from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';

import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};

export default App;
