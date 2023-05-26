import Head from "next/head";
import { useContext, useEffect, useRef } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Posts from "../components/Posts";
import { SearchContext } from "../context/context";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { dispatch } = useContext(SearchContext);

  useEffect(() => {
    const fetchComments = async () => {
      dispatch({ type: "SET_LOADING" });

      const fetchedData = await fetch(
        "https://www.mocky.io/v2/5a6bc16631000078341b8b77"
      );
      const response = await fetchedData.json();

      dispatch({ type: "POPULATE", payload: response.links });
      dispatch({ type: "SORT", payload: "popularity" });
    };

    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>The UX Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Posts />

          <Footer />
        </div>
      </main>
    </>
  );
}
