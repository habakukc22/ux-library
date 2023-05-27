import Head from "next/head";
import { useContext, useEffect, useRef } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Posts from "../components/Posts";
import { SearchContext } from "../context/context";
import styles from "../styles/Home.module.css";
import PostsContainer from "../components/layout/PostsContainer";
import { Container } from "@mui/system";

export default function Home() {
  let a = "x"

  return (
    <>
      <Head>
        <title>The UX Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <PostsContainer />

      <Footer />
    </>
  );
}
