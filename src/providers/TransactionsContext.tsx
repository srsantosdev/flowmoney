import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: 'deposit' | 'withdraw';
  created_at: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = useCallback(
    async ({ amount, category, type, title }: TransactionInput) => {
      const response = await api.post('/transactions', {
        title,
        amount,
        category,
        type,
      });

      const { transaction } = response.data;

      setTransactions(state => [...state, transaction]);
    },
    [],
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/transactions');

      setTransactions(response.data.transactions);
    }

    loadData();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
