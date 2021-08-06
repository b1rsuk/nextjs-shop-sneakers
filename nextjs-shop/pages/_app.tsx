import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '../styles/global.css';
import 'materialize-css/dist/css/materialize.min.css';



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Fragment>
    <Component {...pageProps} />
  </Fragment>;
}
export default MyApp;
