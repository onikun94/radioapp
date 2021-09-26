import React, { Children, Props } from "react";
import Head from "next/head";
import { Header } from "./molecules/header";
export const Layout = ({ children, title = "霜降りデータベース" }) => {
  return (
    <div>
      <Header
        headerText="霜降りデータベース"
        colorType="dark"
        textType="16bold"
      />
      <div>{children}</div>
    </div>
  );
};

// export default Layout;
