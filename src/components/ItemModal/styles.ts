import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

export const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 1100;
  position: relative;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    position: absolute;
    top: -45px;
    right: -30px;
    border: 0;
    width: 30px;
    height: 30px;
    background: #fff;
    color: #f0f;
    font-size: 20px;
    cursor: pointer;
    z-index: 1100;
    border-radius: 50%;
  }
`;

export const ItemContainer = styled(motion.div)`
  width: 600px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;
