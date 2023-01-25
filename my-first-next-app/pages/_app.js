import Navbar from "../components/Navbar";
import Layout from '../components/Layout';
import Script from 'next/script';
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {
  return (
    <>
<Script 
async src="https://www.googletagmanager.com/gtag/js?id=G-GK5NMLQN9Q"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GK5NMLQN9Q');
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
