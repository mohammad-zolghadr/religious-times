import React from "react";

import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={style.loadingCircle}></div>
    </div>
  );
};

export default Loading;
