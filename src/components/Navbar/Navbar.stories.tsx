import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import "../../styles/fonts.css";

export default {
  title: "Headstart/Button",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const Logo = () => {
  return <h1 className="text-xl font-semibold">Apollo</h1>;
};

export interface NavLinkProps {
  href?: string;
  label: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a
      className="px-2 py-1 text-sm rounded-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-200 hover:text-gray-600 transition duration-200 delay-150"
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export const TestNavbar = Template.bind({});
TestNavbar.args = {
  name: "Gringotts",
  logo: Logo(),
  left: [<NavLink href="/" label="Home" />, <NavLink href="/" label="About" />],
};
