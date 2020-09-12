import React, { useState } from "react";
import "./index.scss";
import maskIcon from "../../assets/icons/medicalmask.png";

const App = () => {
  const isProd = process.env.NODE_ENV === "production";

  const handleLazyloadClick = () => {
    import(
      /* webpackChunkName: "lazyComponent" */ "../../lazyComponent.jsx"
    ).then(module => {
      const lazyComponent = module.default;

      lazyComponent();
    });
  };

  return (
    <div className="root_page">
      <div className="txt_header">
        {isProd
          ? "This app is running in production mode "
          : "This app is running in development mode "}
      </div>
      <div className="body_page1">
        Wear a <img src={maskIcon} /> when you step into public places
      </div>
      <button onClick={handleLazyloadClick}>Lazy load</button>
    </div>
  );
};

export default App;
