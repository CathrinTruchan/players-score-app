import styled from "styled-components";

export default function Button({ type, onResetScores, onResetPlayers }) {
  if (type === "Reset all Players") {
    return (
      <ButtonElement onClick={onResetPlayers}>Reset All Players</ButtonElement>
    );
  } else {
    return <ButtonElement onClick={onResetScores}>Reset Scores</ButtonElement>;
  }
}

const ButtonElement = styled.button`
  margin: 20px;
`;
