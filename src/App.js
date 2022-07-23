import MainHeader from "./components/MainHeader";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import React, { useState } from "react";
/*eslint-disable*/

function App() {
  const array = ["apple", "orange", "banana"]; // 배열
  const [text, setText] = useState("감추기");
  const buttonClick = () => {
    text === "감추기" ? setText("보이기") : setText("감추기"); // toggle
  };

  return (
    // props : 컴포넌트 안에 넣고 싶은 데이터 넣을 수 있다.
    // && : 잘 이용하기.
    // return 안에서 js 쓰고 싶은 경우 중괄호를 이용하기.
    // text가 "감추기" 인 경우, UI에 "안녕하세요!" 를 뿌려준다.
    <div>
      {text === "감추기" && <MainHeader text="안녕하세요!" />}
      <button onClick={buttonClick}>{text}</button>
      <MainHeader text="Hello, " object="world!" />
      <MainHeader text="Bye, " object="world!" />
      <ul>
        {array.map((value, index) => {
          // map : 각각의 element를 펼쳐준다. 반복의 기능을 포함한다.
          // console.log(v);
          return <CustomList key={index} list={`${index} ${value}`} />; // 꼭 return 시켜주기. map에서 key 설정하기.
        })}
      </ul>
      <Button />
    </div>
  );
}

export default App;
