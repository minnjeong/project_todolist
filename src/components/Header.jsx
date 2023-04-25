import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  background-color: gray;
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: #3a3a3a;
  background: linear-gradient(#f7f7f7, #cbd6e0);
`;

function Header() {
  return (
    <div>
      <StHeader>
        <div>🤍&nbsp;My Todo List&nbsp;🤍</div>
        <div>React</div>
      </StHeader>
    </div>
  );
}

export default Header;
