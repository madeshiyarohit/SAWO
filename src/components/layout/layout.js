import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children,themeToggle }) {
  return (
    <div>
      <Header themeChanger={themeToggle}/>
      {children}
      <Footer />
    </div>
  );
}
