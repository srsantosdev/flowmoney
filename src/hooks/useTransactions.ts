import { useContext } from 'react';
import {
  TransactionsContext,
  TransactionsContextData,
} from '../providers/TransactionsContext';

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}
