import PropTypes from 'prop-types';

import { Container } from './style';

export default function PageHeader({ title }) {
  return (
    <Container>

      <small>{title}</small>

    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
