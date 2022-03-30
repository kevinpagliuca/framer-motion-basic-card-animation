import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 10px;
  padding: 16px;
  gap: 1rem;
  background: #2c0e37;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;

export const Row = styled(motion.div)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
