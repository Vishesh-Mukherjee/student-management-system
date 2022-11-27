import { Container, InputField, Title } from "./input.styles";

const Input = ({title, otherProps}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <InputField {...otherProps} />
        </Container>
    );
};

export default Input;