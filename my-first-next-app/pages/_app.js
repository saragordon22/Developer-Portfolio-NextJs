import Navbar from "../components/Navbar";
import Layout from '../components/Layout';
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
       <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;