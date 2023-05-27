import { useContext, useEffect } from "react";
import Posts from "../Posts";
import { SearchContext } from "../../context/context";
import styles from "./PostsContainer.module.css";

function PostsContainer() {
  const { filteredPosts, loading, dispatch } = useContext(SearchContext);

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
    <main className={styles.main}>
      <div className={styles.container}>
        <Posts filteredPosts={filteredPosts} loading={loading} />
      </div>
    </main>
  );
}

export default PostsContainer;
