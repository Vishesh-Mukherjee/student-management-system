import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 3%;
    border-left: 1px solid cyan;
    border-right: 1px solid cyan;
`
export const NameContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Name = styled.h3`
    color: white;
    margin: 0px 5px 0px 5px;
`;

export const Email = styled.h3`
    color: cyan;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    border: 1px solid white;
    border-radius: 15px;
    padding: 12px;
    background-color: black;
    color: white;
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        background-color: cyan;
        color: black;
        border-color: cyan;
    }
`

export const LinkButton = styled(Link)`
    border: 1px solid white;
    border-radius: 15px;
    padding: 12px;
    background-color: black;
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        background-color: cyan;
        color: black;
        border-color: cyan;
    }
`