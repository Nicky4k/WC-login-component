import React from "react";

type Props = {
  content: {
    message: String;
    icon: React.ReactNode;
  };
};

const Toast = (props: Props) => {
  return (
    <div className="absolute w-full h-screen backdrop-blur-sm left-0 top-0 z-10 flex justify-center">
      <div className="relative w-96 h-32 	 top-40  bg-white rounded-md shadow-2xl shadow-slate-900	 z-20 flex items-center justify-center">
        <div className="px-2">{props.content.icon}</div>
        <p className="px-2 text-lg">{props.content.message}</p>
      </div>
    </div>
  );
};

export default Toast;
