import Navbar from "../components/Navbar";
import Layout from '../components/Layout';
import Script from 'next/script';
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {
  return (
    <>
<Script 
async src="https://www.googletagmanager.com/gtag/js?id=UA-255349352-2"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-255349352-2');
  `}
</Script>
    <div>
      <Navbar />
       <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
    </>
  );
}

export default MyApp;
