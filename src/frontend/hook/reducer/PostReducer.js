export const PostReducer = (postState, { type, payload }) => {
  switch (type) {
    
    case "BOOKMARKED_FUNCTION":
      return {
        ...postState,
        userBookMark: payload,
      };
    case "TRANDING_POSTS":
      return {
        ...postState,
        allPosts: payload,
      };
    case "LATEST_POSTS":
      return {
        ...postState,
        allPosts: payload,
      };
    // case "DELETE_FROM_BOOKMARK":
    //   return{
    //     ...postState,
    //     userBookMark:payload
    //   }
    default:
      break;
  }
};
