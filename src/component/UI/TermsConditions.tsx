import React from "react";
import StylesFont from "./StylesFont.tsx";
import PlainFont from "./PlainFont.tsx";

type Props = {};

const TermsConditions = (props: Props) => {
  return (
    <div className="text-sm pl-2 relative bottom-1">
      <PlainFont text="By creating or logging into an account, you " />
      <PlainFont text="are agreeing with our" />
      <StylesFont text=" Terms & Conditions " />
      <PlainFont text="and " />
      <StylesFont text=" Privacy Policys." />
    </div>
  );
};

export default TermsConditions;
