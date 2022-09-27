import "./App.css";
import Player from "./Player/Player";
import styled from "styled-components";
import Button from "./Button/Button";

function App() {
  return (
    <div className="App">
      <Header>Players-Score-App</Header>
      <main>
        <Player name="Bernd" score="20" />
        <Button text="Reset score" />
        <Button text="Reset all" />
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
