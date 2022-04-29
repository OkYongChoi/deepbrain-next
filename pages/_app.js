import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { wrapper } from '../redux/store.ts';
import HeaderComponent from "./common/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Next App</title>
      </Head>
       <HeaderComponent />
      <div className="container-fluid">
          <Component {...pageProps} />
      </div>
      <footer>

      </footer>
    </>
  )
}

export default wrapper.withRedux(MyApp)