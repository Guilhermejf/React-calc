import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const Content = styled.div`
width: 300px;
height: auto;
background-color: #fff;
border-radius: 15px;
`;

export const Row = styled.div`
padding:0  1rem;
column-gap:15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
 
`;

export const Column = styled.div`
margin: 1rem 1rem;

  display: flex;
  flex-direction: column;
  row-gap:10px
`;
