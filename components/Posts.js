import { useContext, useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { RiEmotionSadLine } from "react-icons/ri";

import Post from "./Post";
import { SearchContext } from "../context/context";
import styles from "./Posts.module.css";

const images = [
  { name: "James", url: "https://i.ibb.co/nPD3GBQ/user1.jpg" },
  { name: "Lindemann", url: "https://i.ibb.co/51j1K1W/user2.jpg" },
  { name: "Ozzy", url: "https://i.ibb.co/XY5y5wv/user3.jpg" },
  { name: "Tankian", url: "https://i.ibb.co/28ZMCB1/user4.jpg" },
  { name: "Young", url: "https://i.ibb.co/g4khS0N/user5.jpg" },
  { name: "Cobain", url: "https://i.ibb.co/F06BS4Z/user6.jpg" },
  { name: "Dias", url: "https://i.ibb.co/Bt9JnYg/user7.jpg" },
];

function Posts() {
  const [selectValue, setSelectValue] = useState("popularity");
  const { filteredPosts, loading, searchWasClear, dispatch } =
    useContext(SearchContext);

  useEffect(() => {
    if (searchWasClear) {
      setSelectValue("popularity");
      dispatch({ type: "SORT", payload: "popularity" });
    }
  }, [searchWasClear, dispatch]);

  if (filteredPosts.length === 0 && !loading) {
    return (
      <div className={styles.notfound}>
        No posts found...
        <RiEmotionSadLine />
      </div>
    );
  }

  let selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
    dispatch({ type: "SORT", payload: event.target.value });
  };

  return (
    <div className={styles.posts}>
      {!loading ? (
        <div className={styles.sort}>
          <label htmlFor="order">Sort:</label>

          <select
            name="order"
            id="order"
            onChange={selectChangeHandler}
            value={selectValue}
          >
            <option value={"popularity"}>Popularity</option>
            <option value={"comments"}>Comments</option>
            <option value={"created_at"}>Created at</option>
          </select>
        </div>
      ) : null}

      {loading && <div className={styles.loading}>Loading posts...</div>}

      {!loading &&
        filteredPosts.map((post, index) => (
          <Post key={index} post={post} imageUrl={images[index].url} />
        ))}

      {!loading && (
        <div className={styles.loadmore}>
          <BsArrowRepeat />
          <span>Load more</span>
        </div>
      )}
    </div>
  );
}

export default Posts;
