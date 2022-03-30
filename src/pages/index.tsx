import Head from 'next/head';
import * as S from '../styles/pages/Home';
import { useCallback, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { ItemModal } from '../components/ItemModal';
import { Item } from '../components/Item';

export default function Home() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selected, setSelected] = useState<number>();

  const handleClose = useCallback(() => setSelected(undefined), []);
  const handleOpenModal = useCallback((item: number) => setSelected(item), []);

  return (
    <S.Container>
      <Head>
        <title>Framer Motion - Animated Shared Layout</title>
      </Head>
      <AnimateSharedLayout>
        <S.ContentContainer>
          {list.map(item => {
            return <Item key={item} data={item} onClick={handleOpenModal} />;
          })}
        </S.ContentContainer>
        <AnimatePresence>
          {selected && (
            <ItemModal itemSelected={selected} onRequestClose={handleClose} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </S.Container>
  );
}
