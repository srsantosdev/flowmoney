import React, { useCallback, useMemo } from 'react';

import { Container } from './styles';

import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'deposit') {
          accumulator.deposits += transaction.amount;
          accumulator.total += transaction.amount;
        } else {
          accumulator.withdraws += transaction.amount;
          accumulator.total -= transaction.amount;
        }

        return accumulator;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      },
    );
  }, [transactions]);

  const formatNumber = useCallback((value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }, []);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>{formatNumber(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
        <strong>- {formatNumber(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>{formatNumber(summary.total)}</strong>
      </div>
    </Container>
  );
};

export default Summary;
