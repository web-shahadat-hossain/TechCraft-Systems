import "@/styles/globals.css";
import "@/styles/globals.css";
import "@/styles/Home.css";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
