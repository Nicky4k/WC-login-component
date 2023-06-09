import InputLabel from "../UI/InputLabel.tsx";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import TermsConditions from "../UI/TermsConditions.tsx";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setIsError,
  setIsLoading,
  toggleIsLoggedIn,
  setShowToast,
  setUsers,
} from "../../redux-store/loginSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (
      formData.email.length > 6 &&
      formData.email.includes("@") &&
      formData.email.includes(".") &&
      formData.password.length >= 6 &&
      formData.checkbox
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formData]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        dispatch(setShowToast(false));
      }, 2500);
    };
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? true : value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    postFormData();
  };

  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  async function postFormData() {
    try {
      const {
        data: { token },
      } = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
      if (!token) throw new Error("Invalid username/password");

      const {
        data: { data: users },
      } = await axios.get("https://reqres.in/api/unknown", {
        headers: {
          Authorization: `Bearer <${token}>`,
          "Content-type": "application/json",
        },
      });

      if (!users) throw new Error("Request failed");
      dispatch(setUsers(users));

      setFormData({
        email: "",
        password: "",
        checkbox: false,
      });
      dispatch(setIsLoading(false));
      dispatch(toggleIsLoggedIn(true));
      dispatch(setShowToast(true));
    } catch (error) {
      console.log(error.message);
      dispatch(setIsLoading(false));
      dispatch(setIsError(true));
      setTimeout(() => {
        dispatch(setIsError(false));
      }, 2500);
    }
  }
  return (
    <Fragment>
      <p className="py-4 text-base">Hello there, Sign In to Continue</p>

      <div>
        <form className="flex flex-col w-80 " onSubmit={formSubmitHandler}>
          <div className="flex flex-col py-2">
            <InputLabel label="Email" />
            <input
              className={`${
                formIsValid ? `border-zinc-700` : `border-b-zinc-300`
              } border rounded h-10 px-4 outline-none text-blue-700 text-base`}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              autoFocus
              onChange={handleChange}
              data-testid="emailInput"
            />
          </div>
          <div className="flex flex-col py-2">
            <InputLabel label="Password" />
            <div className="relative w-80">
              <input
                className={`${
                  formIsValid ? `border-zinc-700` : `border-b-zinc-300`
                } border rounded w-80 h-10 px-4 outline-none text-blue-700 absolute text-base`}
                value={formData.password}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                data-testid="passwordInput"
              />
              <i
                id="togglePassword"
                onClick={toggleShowPassword}
                className={`absolute far fa-eye right-2 top-3 ${
                  showPassword ? `text-zinc-700` : `text-zinc-400`
                } cursor-pointer`}
              ></i>
            </div>

            <div className="flex pt-20 pb-7 items-start">
              <label htmlFor="checkbox" className="cursor-pointer relative ">
                <input
                  className={`relative w-5 h-5 ${
                    formData.checkbox ? `bg-blue-700` : `border border-zinc-400`
                  }  appearance-none rounded cursor-pointer`}
                  type="checkbox"
                  name="checkbox"
                  data-testid="checkBoxInput"
                  onChange={handleChange}
                />
                {formData.checkbox && (
                  <FontAwesomeIcon
                    onClick={() => {
                      setFormData({ ...formData, checkbox: false });
                    }}
                    icon={faCheck}
                    className="text-white absolute inset-0.5 text-base"
                  />
                )}
              </label>
              <TermsConditions />
            </div>
          </div>
          <button
            disabled={!formIsValid}
            className={`w-full bg-indigo-100 h-12 rounded-md ${
              formIsValid && `bg-indigo-700 text-white`
            } 
      font-medium text-indigo-700`}
          >
            Next
          </button>
        </form>
        <p className="w-full text-center text-indigo-800 mt-32 cursor-pointer text-base">
          Signin with company SSO
        </p>
      </div>
    </Fragment>
  );
};

export default SignIn;
