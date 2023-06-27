import PropTypes from 'prop-types';
import {
  CardItem,
  Container,
  Title,
  Item,
} from './style';

import formatCurrency from '../../utils/formatCurrency';
import Modal from '../Modal';
import useCard from './useCard';

export default function Card({
  title, subTitle, items, information,
}) {
  const {
    isVisible,
    modalOpen,
    selectedItem,
    titleRef,
    handleOpenModal,
    handleCloseModal,
  } = useCard();

  return (
    <Container>

      <Title ref={titleRef} isVisible={isVisible}>
        <small>{title}</small>
      </Title>

      <CardItem>
        <small>{subTitle}</small>

        <div className="informations">
          <span>{information.join('\n\n')}</span>
        </div>

        {items.map((item) => (
          <Item key={item.id} onClick={() => handleOpenModal(item)}>
            <span>{item.name}</span>
            <strong>{(formatCurrency(item.price))}</strong>
            <div className="kilo">{`(${item.unit})`}</div>
          </Item>
        ))}

      </CardItem>

      {selectedItem && (
        <Modal
          title="Venha saborear nossas delícias! Entre em contato para mais informações"
          visible={modalOpen}
          cancelLabel="Fechar"
          onCancel={handleCloseModal}
        >
          <div>
            <h3>{selectedItem.name}</h3>
            <p>
              {formatCurrency(selectedItem.price)}
              {' '}
              <span>{selectedItem.unit}</span>
            </p>
          </div>
        </Modal>
      )}

    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      unit: PropTypes.string,
    }),
  ).isRequired,
};
