/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import {
  CardItem,
  Container,
  Title,
  Item,
} from './style';
import Modal from '../Modal';

export default function Card({
  title, subTitle, items, information,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const { top } = titleRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight) {
      setIsVisible(true);
    }
  }

  function handleOpenModal(item) {
    setModalOpen(true);
    setSelectedItem(item);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

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
            <div className="kilo">{item.unit}</div>
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
      price: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
