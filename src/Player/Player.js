import styled from "styled-components";

export default function Player({ name, score, onIncrease, onDecrease }) {
  return (
    <Section>
      <div>{name}</div>
      <button onClick={onDecrease}>Minus</button>
      <div>{score}</div>
      <button onClick={onIncrease}>Plus</button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
`;
