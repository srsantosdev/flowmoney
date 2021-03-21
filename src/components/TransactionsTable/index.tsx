import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Container, SimpleButton } from './styles';

const TransactionsTable: React.FC = () => {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
            <td align="right">
              <SimpleButton>
                <FiTrash2 size={18} />
              </SimpleButton>
            </td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$10.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
            <td align="right">
              <SimpleButton>
                <FiTrash2 size={18} />
              </SimpleButton>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
