import React, { Dispatch, SetStateAction, useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './styles';

export type ItemProps = {
  data: number;
  onClick?: Dispatch<SetStateAction<number>>;
  modal?: boolean;
};

export const Item = ({ data, onClick, modal }: ItemProps) => {
  const widths = {
    1: 50,
    2: 75,
    3: 100,
    4: 125,
    5: 150,
    6: 165,
    7: 185,
    8: 190,
    9: 195,
  };
  return (
    <S.Item
      key={data}
      layoutId={!modal ? String(data) : undefined}
      onClick={() => onClick?.(data)}
    >
      <S.Row>
        <Skeleton highlightColor="#ccc " circle height={20} width={20} />
        <Skeleton
          highlightColor="#ccc"
          height={20}
          width={widths[data] || 150}
        />
      </S.Row>
      <Skeleton highlightColor="#ccc" height={18} />
      <Skeleton highlightColor="#ccc" height={48} />
    </S.Item>
  );
};
