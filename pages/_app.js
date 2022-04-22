// import {Layout} from "./common";
// import Head from 'next/head'
// const App = ({ Component, pageProps}) => {
//   return (<>
//     <Head>
//       <meta charSet="utf-8"/>
//       <meta name="viewport" 
//       content="width=device-width, user-scalable=no, 
//       initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
//       <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//       <title>Soccer App</title>
//     </Head>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//     </>
//   )
// }

// export default App
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