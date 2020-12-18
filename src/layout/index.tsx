import React from "react";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
