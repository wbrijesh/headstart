import React from "react";
import "./Button.css";
import "../../styles/tailwind.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="rounded-full border border-gray-500 px-4 py-1.5 text-sm text-gray-700">
      {props.label}
    </button>
  );
};

export default Button;
