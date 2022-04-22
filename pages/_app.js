import React from "react";
import Head from "next/head";
import Nav from "./common/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>
        <Nav />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App