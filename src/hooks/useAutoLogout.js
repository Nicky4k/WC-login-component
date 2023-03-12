import { useCallback, useEffect } from "react";
import { toggleIsLoggedIn } from "../redux-store/loginSlice";
import { useDispatch } from "react-redux";

const useAutoLogout = () => {
  const dispatch = useDispatch();

  const checkForInactivity = useCallback(() => {
    const expireTime = localStorage.getItem("expireTime");

    if (expireTime < Date.now()) {
      dispatch(toggleIsLoggedIn(false));
    }
  }, [dispatch]);

  const updateExpireTime = () => {
    const expireTime = Date.now() + 3000;

    localStorage.setItem("expireTime", expireTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [checkForInactivity]);

  useEffect(() => {
    updateExpireTime();

    const events = ["click", "keypress", "scroll", "mousemove"];

    events.forEach((event) => window.addEventListener(event, updateExpireTime));

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, updateExpireTime)
      );
    };
  }, []);
};

export default useAutoLogout;
