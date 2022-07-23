import React from "react";
import styled from "styled-components";
// 지금 styled-components가 적용되지 않는다. 구글링을 좀 더 해보기.
// (1) Invalid hook call (2) Error boundary

const MyButton = styled.button``;

function StyledButton() {
  return <MyButton>Green</MyButton>;
}
export default StyledButton;
