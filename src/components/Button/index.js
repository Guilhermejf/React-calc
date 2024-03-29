import { ButtonContainer } from "./styles";

const Button = ({ label, color, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} bgcolor={color}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
