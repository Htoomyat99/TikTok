import "../../styles/globals.scss";
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
          <div id="modal-root"></div>
      </Layout>
  );
};

export default MyApp;
