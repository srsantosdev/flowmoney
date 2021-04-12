import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, SimpleButton } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.created_at),
                )}
              </td>
              <td align="right">
                <SimpleButton>
                  <FiTrash2 size={18} />
                </SimpleButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
