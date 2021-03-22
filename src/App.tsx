import React, { useCallback, useState } from 'react';

import ReactModal from 'react-modal';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import GlobalStyle from './styles/GlobalStyle';
import NewTransactionModal from './components/NewTransactionModal';

ReactModal.setAppElement('#root');

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
