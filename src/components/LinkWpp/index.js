import { Container } from './style';
import wpp from '../../assets/icons/whatsapp.png';

export default function LinkWpp() {
  const text = encodeURIComponent('Olá There, gostaria de fazer um orçamento...');
  const phoneNumber = '5511974742302';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

  return (
    <Container>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <small>Comprar</small>
        <img src={wpp} alt="wpp" />
      </a>
    </Container>
  );
}
