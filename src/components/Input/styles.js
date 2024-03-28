import styled from "styled-components";

export const Container = styled.div`
  height: 80px;

  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: end;

  input {
    border-radius: 10px 10px 0 0;
    padding: 0 0.7rem 0 0.7rem;
    font-size: 24px;
    width: 100%;
    height: 80px;
    background-color: #0000dd;
    color: #fff;
    font-weight: 700;

    border: 0;
    text-align: right;
  }

  input:focus {
    outline: none;
  }
`;
