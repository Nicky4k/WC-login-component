import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";
import InputLabel from "./component/UI/InputLabel.tsx";
import StylesFont from "./component/UI/StylesFont.tsx";
import PlainFont from "./component/UI/PlainFont.tsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  //use redux

  useEffect(() => {
    if (
      data.email.length > 6 &&
      data.email.includes("@") &&
      data.email.includes(".") &&
      data.password.length >= 6 &&
      data.checkbox
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="mt-7">
      <WissenSvg />
      <p className="py-4 text-base">Hello there, Sign In to Continue</p>

      <div>
        <form className="flex flex-col w-80 ">
          <div className="flex flex-col py-2">
            <InputLabel label="Email" />
            <input
              className="border-zinc-300 border rounded h-10 px-4 outline-none text-blue-700 text-base"
              type="email"
              name="email"
              id="email"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2">
            <InputLabel label="Password" />
            <input
              className="border-zinc-300 border rounded h-10 px-4 outline-none text-blue-700 text-base"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
            <div className="flex py-7 items-start">
              <input
                className="border-slate-400	 w-12 h-5 accent-blue-800"
                type="checkbox"
                name="checkbox"
                onChange={handleChange}
              />
              <div className="text-sm pl-2 relative bottom-1">
                <PlainFont text="By creating or logging into an account, you " />
                <PlainFont text="are agreeing with our" />
                <StylesFont text=" Terms & Conditions " />
                <PlainFont text="and " />
                <StylesFont text=" Privacy Policys." />
              </div>
            </div>
          </div>
          <button
            className={`w-full bg-indigo-100 h-12 rounded-md ${
              formIsValid && `bg-indigo-700`
            } 
            ${formIsValid && `text-white`} 
            font-medium text-indigo-700`}
          >
            Next
          </button>
        </form>
        <p className="w-full text-center text-indigo-800 mt-32 cursor-pointer text-base">
          Signin with company SSO
        </p>
      </div>
    </div>
  );
}

export default App;
