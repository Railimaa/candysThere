import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './style';

import ReactPortal from '../ReactPortal';
import useAnimetedUnmount from '../../hooks/useAnimatedUnmount';
import LinkWpp from '../LinkWpp';

export default function Modal({
  visible, title, children, cancelLabel,
  onCancel,
}) {
  const { shouldRender, animetedElementRef } = useAnimetedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">

      <Overlay isLeaving={!visible} ref={animetedElementRef}>
        <Container isLeaving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button type="button" className="cancel-button" onClick={onCancel}>
              {cancelLabel}
            </button>

            <LinkWpp />

          </Footer>

        </Container>
      </Overlay>

    </ReactPortal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};
