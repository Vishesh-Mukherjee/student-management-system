import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Form = styled.form`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 15% 0% 20% 0%;
`;

export const Button = styled.button`
    border: 1px solid cyan;
    padding: 5%;
    color: white;
    background-color: black;
    font-size: 25px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-weight: bold;
    border-radius: 15px;
    &:hover {
        background-color: cyan;
        color: black;
    }
`;