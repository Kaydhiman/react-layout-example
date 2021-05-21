import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ component: Comp, ...rest }) {
  return (
    <div className="container">
      <Header />
      <Route {...rest} render={(props) => <Comp {...props} />} />
      <Footer />
    </div>
  );
}

export default Layout;
