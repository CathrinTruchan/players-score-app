import styled from "styled-components";

export default function Player({ name, score }) {
  return (
    <Section>
      <div>{name}</div>
      <button>Minus</button>
      <div>{score}</div>
      <button>Plus</button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
