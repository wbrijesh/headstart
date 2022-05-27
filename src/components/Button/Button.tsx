import React from "react";
import "../../styles/tailwind.css";
import { generateClasses } from "../../utils";
import { ButtonClassesData } from "../../data";
import { ButtonProps } from "../../../types";

const Button = (props: ButtonProps) => {
  let classesString;
  React.useEffect(() => {
    classesString = generateClasses(ButtonClassesData, props);
  }, [ButtonClassesData, props]);
  return <button className={classesString}>{props.label}</button>;
};

export default Button;
