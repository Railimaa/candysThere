/* eslint-disable no-use-before-define */
import { useEffect, useRef, useState } from 'react';

export default function useCard() {
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

  return {
    isVisible,
    modalOpen,
    selectedItem,
    titleRef,
    handleScroll,
    handleOpenModal,
    handleCloseModal,
  };
}
