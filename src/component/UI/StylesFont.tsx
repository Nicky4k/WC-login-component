import React from "react";

type Props = {
  text: string;
};

const StylesFont = (props: Props) => {
  return (
    <span className="text-zinc-900 text-sm font-semibold leading-3">
      {props.text}
    </span>
  );
};

export default StylesFont;
