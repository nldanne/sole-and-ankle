import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug} >
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;  /* creates gutter for the shoe grid */
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  margin: 16px; /* creates gutter for the shoe grid using margin collapse*/
  flex: 1;  /* in combination with min-width allows the cards to grow into the available space*/
`;

export default ShoeGrid;
