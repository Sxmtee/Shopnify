import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
