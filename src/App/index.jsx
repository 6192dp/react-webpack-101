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
      <div className="btn_lazyLoad" onClick={handleLazyloadClick}>
        Lazy load
      </div>

      <div className="txt_iconcredits">
        Mask Icon made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default App;
