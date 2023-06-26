import { Link } from 'react-router-dom';
import { Container } from './style';

import face from '../../assets/icons/face.png';
import insta from '../../assets/icons/insta.png';
import email from '../../assets/icons/email.png';

export default function Footer() {
  return (
    <Container>
      <Link to="https://www.facebook.com/profile.php?id=100063470805046&mibextid=LQQJ4d">
        <img src={face} alt="face" />
      </Link>

      <Link to="https://instagram.com/deliciasdathere?igshid=MWQ1ZGUxMzBkMA==">
        <img src={insta} alt="insta" />
      </Link>

      <Link to="mailto:teresinhasantos2@gmail.com?subject=Orçamento%20Doces%20e%20Salgados">
        <img src={email} alt="email" />
      </Link>
    </Container>
  );
}
