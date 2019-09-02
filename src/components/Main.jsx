import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  padding: 1em;

`;

const MainCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
  @media screen and (max-width: 767px){
        grid-template-columns:  1fr;
    }
`;

const Main = ({ children }) => (
    <MainStyle>
        <MainCont>
            {children}
        </MainCont>
    </MainStyle>
);

export default Main;