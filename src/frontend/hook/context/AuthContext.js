import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [{ user, token }, dispatchAuthState] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  });

  const SignUpService = async (
    username,
    password,
    email,
    isPasswordMatch,
    redirectToLocation
  ) => {
    if (isPasswordMatch()) {
      try {
        const response = await axios.post("/api/auth/signup", {
          username,
          password,
          email,
        });

        if (response.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          localStorage.setItem("token", response.data.encodedToken);
          toast.success("Signed up!!");
          dispatchAuthState({
            type: "USER_LOGGED_IN",
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          navigate(redirectToLocation, "/");
        }
      } catch (error) {
        const {
          response: { status },
        } = error;
        if (status == 422) {
          toast.error(" username already exists! ");
        } else {
          toast.error("unable to Signup!");
        }
      }
    }
  };

  const loginService = async (username, password, redirectToLocation) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        localStorage.setItem("token", response.data.encodedToken);

        dispatchAuthState({
          type: "USER_LOGGED_IN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });
        toast.success("Logged in successfully!");
        navigate(redirectToLocation, { replace: true });
      }
    } catch (error) {
      console.log(error);
      const {
        response: { status },
      } = error;
      if (status === 404) {
        toast.error("The username you entered is not Registered");
      } else if (401) {
        toast.error("The credentials you entered are invalid");
      } else {
        toast.error("unable to login!");
      }
    }
  };

  const logOutRequest = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatchAuthState({ type: "USER_LOGGED_OUT" });
  };

  return (
    <AuthContext.Provider
      value={{ SignUpService, loginService, logOutRequest, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// {
// "email":"admin@gmail.com",
// "password":"12345"
// }
