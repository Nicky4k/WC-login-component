import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";
import SignIn from "./component/pages/SignIn";
import Toast from "./component/UI/Toast.tsx";
import { useSelector } from "react-redux";

function App() {
  const {
    loginStore: { isLoading },
  } = useSelector((state) => state);
  console.log(isLoading);

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {isLoading && ReactDOM.createPortal(<Toast />, portalElement)}
      <WissenSvg />
      <SignIn />
    </Fragment>
  );
}

export default App;
