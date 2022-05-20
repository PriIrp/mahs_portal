import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Head>
        <link rel="favicon" href="favicon.ico" />
        <title>McNair Student Main</title>
    </Head>

    {/* <p> </p> */}
    
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
