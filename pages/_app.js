import { SearchContextProvider } from "../context/context";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  );
}
