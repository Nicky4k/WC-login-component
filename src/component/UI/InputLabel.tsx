import React from "react";

type Props = { label: string };

const InputLabel = (props: Props) => {
  return <label className="text-zinc-400 text-sm py-1">{props.label}</label>;
};

export default InputLabel;
