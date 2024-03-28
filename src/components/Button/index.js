import { ButtonContainer } from './styles'

const Button = ({label,color}) =>{
    return(
        <ButtonContainer background={color}>
            {label}
        </ButtonContainer>
    )
}

export default Button;