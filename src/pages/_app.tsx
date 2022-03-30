import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from '../styles/global';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
      <GlobalStyles />
    </AnimatePresence>
  );
}

export default MyApp;
