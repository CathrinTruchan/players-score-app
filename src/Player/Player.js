import styled from "styled-components";

export default function Player({ name, score }) {
  return (
    <Section>
      <div>{name}</div>
      <div>{score}</div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
`;
