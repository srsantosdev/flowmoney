import React, { FormEvent, useCallback, useState } from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TypeTransaction = 'deposit' | 'withdraw';

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState<TypeTransaction>('deposit');

  const handleCreateNewTransaction = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await createTransaction({ title, amount, category, type });

      setType('deposit');
      setTitle('');
      setAmount(0);
      setCategory('');

      onRequestClose();
    },
    [title, amount, category, type, createTransaction, onRequestClose],
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Título"
          type="text"
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            radioType="deposit"
            isActive={type === 'deposit'}
            type="button"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            radioType="withdraw"
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};

export default NewTransactionModal;
