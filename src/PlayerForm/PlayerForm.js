import styled from "styled-components";

export default function PlayerForm() {
  return (
    <Form>
      <label htmlFor="newPlayer">Add player:</label>
      <input id="newPlayer" name="newPlayer" type="text" />
    </Form>
  );
}

const Form = styled.form`
  margin-top: 50px;
`;
