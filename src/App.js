import "./App.css";
import Player from "./Player/Player";
import styled from "styled-components";
import Button from "./Button/Button";
import PlayerForm from "./PlayerForm/PlayerForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const initialPlayers = [
  {
    id: nanoid(),
    name: "Bernd",
    score: 20,
  },
  {
    id: nanoid(),
    name: "Karl",
    score: 50,
  },
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);

  function createPlayer(name) {
    setPlayers([
      ...players,
      {
        id: nanoid(),
        name: name,
        score: 0,
      },
    ]);
  }

  function increaseScore(id) {
    setPlayers((previousPlayers) =>
      previousPlayers.map((player) =>
        player.id === id ? { ...player, score: player.score + 1 } : player
      )
    );
  }

  function decreaseScore(id) {
    setPlayers((previousPlayers) =>
      previousPlayers.map((player) =>
        player.id === id ? { ...player, score: player.score - 1 } : player
      )
    );
  }

  //function resetAllPlayers() {

  function resetScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetPlayers() {
    setPlayers([]);
  }

  return (
    <div className="App">
      <Header>Players-Score-App</Header>
      <main>
        {players.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            onIncrease={() => increaseScore(player.id)}
            onDecrease={() => decreaseScore(player.id)}
          />
        ))}
        <Button onResetScores={resetScores} type="Reset score" />
        <Button type="Reset all Players" onResetPlayers={resetPlayers} />
        <PlayerForm onCreatePlayer={createPlayer} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

const Header = styled.header`
  margin-bottom: 30px;
  background-color: darkblue;
  color: white;
  padding: 20px;
`;
