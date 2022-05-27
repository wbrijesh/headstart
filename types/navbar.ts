interface NavbarProps {
  name: string;
  logo?: React.ReactNode;
  left?: React.ReactNode[];
  right?: React.ReactNode[];
  fixed?: boolean;
  explicitStyle?: React.CSSProperties;
}

export default NavbarProps;
