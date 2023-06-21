export const authReducer = (authState, { type, payload }) => {
  switch (type) {
    case "USER_LOGGED_IN":
      return {
        ...authState,
        user: payload.user,
        token: payload.token,
      };
    case "USER_LOGGED_OUT":
      return {
        ...authState,
        user: {},
        token: "",
      };

      break;

    default:
      break;
  }
};
