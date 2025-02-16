import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp