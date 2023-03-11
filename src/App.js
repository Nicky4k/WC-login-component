import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";
import SignIn from "./component/pages/SignIn";
import Toast from "./component/UI/Toast.tsx";
import { useSelector } from "react-redux";
import Users from "./component/pages/Users.tsx";

function App() {
  const {
    loginStore: { isLoading, isLoggedIn },
  } = useSelector((state) => state);

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {isLoading && ReactDOM.createPortal(<Toast />, portalElement)}
      <WissenSvg />
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && <Users />}
    </Fragment>
  );
}

export default App;
