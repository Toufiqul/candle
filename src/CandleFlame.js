import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Flame = styled.div`
  width: 10px;
  height: 100px;
  background: #ff5722;
  border-radius: 5px;
  position: relative;
  animation: ${flicker} 0.5s infinite alternate;
`;

const CandleFlame = () => {
  return <Flame />;
};

export default CandleFlame;
