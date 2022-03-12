import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Element,
  HeadingContainer,
  Title,
  Icon,
} from './Accordion.css';

const Accordion = ({ items }) => {
  const [openedElement, setOpenedElement] = useState(-1);

  return (
    <Container>
      {items.map(({ title, content }, index) => {
        const isOpen = index === openedElement;

        return (
          <Element key={index}>
            <HeadingContainer onClick={() => setOpenedElement(isOpen ? -1 : index)}>
              <Title>{title}</Title>
              <Icon isOpen={isOpen}>&darr;</Icon>
            </HeadingContainer>
            <Content isOpen={isOpen}>
              {content}
            </Content>
          </Element>
        );
      })}
    </Container>
  );
};

Accordion.propTypes = {
  isAbTest: PropTypes.bool,
  items: PropTypes.array,
};

Accordion.defaultProps = {
  isAbTest: false,
  items: [],
};

export default Accordion;
