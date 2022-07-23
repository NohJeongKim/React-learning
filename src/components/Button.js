import React from "react";
import "../style/Button.scss";

function Button() {
  return (
    <div>
      <button>
        <span>Green</span>
      </button>
      <button className="blue">Green</button>
    </div>
  );
}

export default Button;
