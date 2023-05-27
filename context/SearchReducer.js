const searchReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE":
      return {
        ...state,
        posts: action.payload,
        filteredPosts: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "FILTER":
      // eslint-disable-next-line no-case-declarations
      let filteredPosts = state.posts.filter(
        (post) =>
          post.meta.title
            .toUpperCase()
            .includes(action.payload.toUpperCase()) ||
          post.meta.author.toUpperCase().includes(action.payload.toUpperCase())
      );
      return {
        ...state,
        filteredPosts,
        searchWasClear: false,
        loading: false,
      };

    case "SORT":
      // eslint-disable-next-line no-case-declarations
      let sortedPosts;
      if (action.payload === "popularity") {
        sortedPosts = state.filteredPosts.sort((a, b) => b.upvotes - a.upvotes);
      }
      if (action.payload === "comments") {
        sortedPosts = state.filteredPosts.sort(
          (a, b) => b.comments - a.comments
        );
      }
      if (action.payload === "created_at") {
        sortedPosts = state.filteredPosts.sort(
          (a, b) => b.created_at - a.created_at
        );
      }

      return {
        ...state,
        filteredPosts: sortedPosts,
        searchWasClear: false,
        loading: false,
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        filteredPosts: state.posts,
        searchWasClear: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
