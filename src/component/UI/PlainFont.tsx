import React from "react";

type Props = {
  text: String;
};

const PlainFont = (props: Props) => {
  return (
    <span className="text-sm text-zinc-400 leading-none">{props.text}</span>
  );
};

export default PlainFont;
