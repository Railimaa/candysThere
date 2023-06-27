import PropTypes from 'prop-types';
import { Container } from './style';
import sad from '../../assets/images/sad.svg';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="SadError" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os produtos</strong>

        <button type="button" onClick={onTryAgain}>Tente novamente</button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
