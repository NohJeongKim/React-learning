// import React, { useState } from "react";
/* eslint-disable */
import React from "react";

function MainHeader({ text, object }) {
  /*
  const [text, setText] = useState("Hello, world!"); // 상태를 처리하는 함수, [상태 데이터, 상태를 위한 함수]
  const onClick = () => {
    setText("Bye, world!");
  }; // arrow function
  */

  return (
    <div>
      <h1 /*onClick={onClick}*/>
        {text}
        {object}
      </h1>
    </div>
  );
}

export default MainHeader;
