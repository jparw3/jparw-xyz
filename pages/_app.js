import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="mx-5 mt-40">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
