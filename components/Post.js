import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import Image from "next/image";

import styles from "./Post.module.css";

// let formatDate = (date) => {
//Here we suppose that the date stores the number of milliseconds since the post was created

//   const hours = (date / 1000) * (1 / 60) * (1 / 60);
//   const days = Math.floor(hours / 24);
//   const remainingHours = Math.floor(hours % 24);
//   const remainingMinutes = Math.round(
//     ((hours % 24) - Math.floor(hours % 24)) * 60
//   );

//   if (days > 0) {
//     return `${days} day${days > 1 ? "s" : ""} ago`;
//   }

//   if (remainingHours > 0) {
//     return `${remainingHours} hour${days > 1 ? "s" : ""} ago`;
//   }

//   if (remainingHours > 0) {
//     return `${remainingHours} hour${days > 1 ? "s" : ""} ago`;
//   }

//   if (remainingHours == 0) {
//     return `Just now`;
//   }
// };

let formatDate = (date) => {
  //Here we suppose that the date stores number of seconds the between the creation of the post and 0h 1/1/1970
  const now = Date.now();
  const creationTime = new Date(date * 1000).valueOf();
  const difference = now - creationTime;

  const hours = (difference / 1000) * (1 / 60) * (1 / 60);

  const years = Math.floor((hours / 24) * (1 / 365));
  const days = Math.floor(hours / 24);
  const remainingHours = Math.floor(hours % 24);
  const remainingMinutes = Math.round(
    ((hours % 24) - Math.floor(hours % 24)) * 60
  );

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  if (remainingHours > 0) {
    return `${remainingHours} hour${remainingHours > 1 ? "s" : ""} ago`;
  }

  if (remainingMinutes > 0) {
    return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""} ago`;
  }

  if (remainingMinutes == 0) {
    return `Just now`;
  }

  return "Error!";
};

function Post(props) {
  const { meta, category, comments, created_at, upvotes } = props.post;
  const { imageUrl } = props;
  const { author, title, url } = meta;
  const isOwner = !!props.post.isOwner;

  let categoryDetails;
  switch (category) {
    case "ux_ui":
      categoryDetails = { name: "UX Theory", color: "#00bbff" };
      break;
    case "case_study":
      categoryDetails = { name: "Case Study", color: "#f4973c" };
      break;
    case "product_design":
      categoryDetails = { name: "Product Design", color: "#00e2ad" };
      break;
    case "discussion":
      categoryDetails = { name: "Opinion", color: "#4271d6" };
      break;
    default:
      categoryDetails = { name: "Unknown", color: "#cbcbcb" };
  }

  let newDate = formatDate(created_at);

  return (
    <div className={styles.post}>
      <div className={styles.upvotes}>
        <IoIosArrowUp />
        <span>{upvotes}</span>
      </div>

      <div className={styles.postdetails}>
        <div className={styles.url}>{url.toUpperCase()}</div>
        <div className={styles.title}>{title}</div>

        <div className={styles.moredetails}>
          <div className={styles.leftcontainer}>
            <span
              className={styles.category}
              style={{ backgroundColor: categoryDetails.color }}
            >
              {categoryDetails.name}
            </span>

            <span className={styles.verticalbar}>|</span>

            <span className={styles.author}>
              <span className={styles.authorimage}>
                <Image src={imageUrl} alt="user" width={36} height={36} />
              </span>
              <p>{author}</p>
            </span>
          </div>

          <div className={styles.rightcontainer}>
            <span className={styles.createdat}>{newDate}</span>

            <span className={styles.dot} />

            <span className={styles.comments}>
              <FaComment />
              <span>
                {`${comments} ${comments > 0 ? "Comments" : "Comment"}`}
              </span>
            </span>
            {isOwner ? <span className={styles.edit}>{"Edit"}</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
