import React from "react";
import "../../styles/tailwind.css";
import { generateClasses } from "../../utils";
import { ButtonClassesData } from "../../data";
import { ButtonProps } from "../../../types";
import IncludeClassesButton from "./includeClasses";

const Button = (props: ButtonProps) => {
  const [classesString, setClassesString] = React.useState("");
  React.useEffect(() => {
    setClassesString(generateClasses(ButtonClassesData, props));
  }, [ButtonClassesData, props]);
  return (
    <>
      <button className={classesString}>{props.label}</button>
    </>
  );
};

export default Button;
