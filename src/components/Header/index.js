import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Container, Nav, Title, Infos,
} from './style';

import logo from '../../assets/images/logoA.png';
import iconDoce from '../../assets/icons/iconDoce.png';
import iconSalg from '../../assets/icons/iconSalg.png';

export default function Header() {
  const [activeLink, setActiveLink] = useState('doces');

  function handleClickLink(link) {
    setActiveLink(link);
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <Title>
        <h5>Delícias da Therê</h5>
      </Title>

      <Infos>
        <div className="info">
          <small>Segunda a sábado das 09h às 18h</small>
          <small>
            Pedidos com no mínimo 04 dias de antecedência!
          </small>
          <small>Bairro Engenho Novo Barueri </small>
        </div>
      </Infos>

      <Nav>
        <div className="links">
          <Link to="/" className={activeLink === 'doces' ? 'active' : ''} onClick={() => handleClickLink('doces')}>
            Doces
            <img src={iconDoce} alt="doce" />
          </Link>
          <Link to="/salgados" className={activeLink === 'salgados' ? 'active' : ''} onClick={() => handleClickLink('salgados')}>
            Salgados
            <img src={iconSalg} alt="salgado" />
          </Link>
        </div>
      </Nav>
    </Container>
  );
}
