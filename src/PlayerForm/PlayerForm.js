import styled from "styled-components";

export default function PlayerForm({ createPlayer }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { newPlayer } = data;
    createPlayer(newPlayer);
    event.target.reset();
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="newPlayer">Add player:</label>
      <input id="newPlayer" name="newPlayer" type="text" />
      <button>Add Player</button>
    </Form>
  );
}

const Form = styled.form`
  margin-top: 50px;
`;
