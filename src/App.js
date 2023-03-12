import ReactDOM from "react-dom";
import { Fragment, useEffect } from "react";
import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";
import SignIn from "./component/pages/SignIn";
import Toast from "./component/UI/Toast.tsx";
import { useSelector } from "react-redux";
import Users from "./component/pages/Users";
import useContent from "./hooks/useContent";
import useAutoLogout from "./hooks/useAutoLogout";

function App() {
  const portalElement = document.getElementById("overlays");

  const {
    loginStore: { isLoading, isLoggedIn, showToast, isError },
  } = useSelector((state) => state);

  let content = useContent(isLoading, showToast, isError);

  useAutoLogout();

  return (
    <Fragment>
      {(isLoading || showToast || isError) &&
        ReactDOM.createPortal(<Toast content={content} />, portalElement)}
      <WissenSvg />
      {!isLoggedIn && <SignIn data-testid="signInPage" />}
      {isLoggedIn && <Users data-testid="usersPage" />}
    </Fragment>
  );
}

export default App;
