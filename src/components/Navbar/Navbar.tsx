import React from "react";
import "../../styles/tailwind.css";

export interface NavbarProps {
  name: string;
  logo?: React.ReactNode;
  left?: React.ReactNode[];
  right?: React.ReactNode[];
  fixed?: boolean;
  explicitStyle?: React.CSSProperties;
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="w-full border border-black h-[60px] flex justify-between items-center px-4 py-2">
      <div className="flex space-x-5">
        {props.logo ? props.logo : <p>{props.name}</p>}
        <div className="flex">
          {props.left &&
            props.left.map((component: React.ReactNode, index: number) => (
              <div key={"navbar-left-component" + index}>{component}</div>
            ))}
        </div>
      </div>
      <div className="flex">
        {props.right &&
          props.right.map((component: React.ReactNode, index: number) => (
            <div key={"navbar-left-component" + index}>{component}</div>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
