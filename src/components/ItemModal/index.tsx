import React from 'react';
import { Item } from '../Item';
import * as S from './styles';

interface ItemModalProps {
  itemSelected: number;
  onRequestClose: () => void;
}

export const ItemModal = ({ itemSelected, onRequestClose }: ItemModalProps) => {
  return (
    <S.Container>
      <S.Backdrop onClick={onRequestClose} />
      <S.ContentContainer layoutId={String(itemSelected)}>
        <S.ItemContainer>
          <Item data={itemSelected} modal />
        </S.ItemContainer>
        <button onClick={onRequestClose}>✖</button>
      </S.ContentContainer>
    </S.Container>
  );
};
