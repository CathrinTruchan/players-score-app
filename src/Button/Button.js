import styled from "styled-components";

export default function Button({ text }) {
  return <ButtonElement>{text}</ButtonElement>;
}

const ButtonElement = styled.button`
  margin: 20px;
`;
