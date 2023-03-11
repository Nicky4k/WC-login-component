import React from "react";

type Props = {};

const Toast = (props: Props) => {
  return (
    <div className="absolute w-full h-screen backdrop-blur-sm left-0 top-0 z-10 flex justify-center">
      <div className="relative w-96 h-16 	 top-10  bg-white rounded-md shadow-md z-20 flex items-center justify-center">
        Toast
      </div>
    </div>
  );
};

export default Toast;
