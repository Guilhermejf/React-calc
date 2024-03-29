import { Container } from "./styles";

const Input = ({ valor }) => {
  return (
    <Container>
      <input readOnly value={valor} />
    </Container>
  );
};

export default Input;
