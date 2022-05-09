import React from "react";
import "./loading.scss";
const Loading = () => {
  return (
    <div style={{ width: "100%", height: "75px" }}>
      <div className="loading">
        <div className="progress">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
