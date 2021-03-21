import React from 'react';

import { Container, Content } from './styles';

import logoimg from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="Flowmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
