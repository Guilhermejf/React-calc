import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${(prop) => (prop.bgcolor ? prop.bgcolor : "#e9e5e1")};
  width: 50px;
  height: 50px;
  color: #000;
  font-size: 25px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  filter: drop-shadow(3px 5px 3px #000);

  &:hover {
    opacity: 0.6;
  }
`;
