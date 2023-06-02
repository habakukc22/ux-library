import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewButton from "../components/layout/NewButton";
import PostsContainer from "../components/layout/PostsContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The UX Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <NewButton />

      <PostsContainer />

      <Footer />
    </>
  );
}
