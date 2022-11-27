import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
`;

export const LinkDiv = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    &:hover {
        background: rgb(40, 40, 40);
    }
`;

export const Links = styled.div`
    position: relative;
    width: 40%;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const CustomLink = styled(Link)`
    border: 1px solid white;
    border-radius: 15px;
    position: absolute;
    width: inherit;
    height: inherit;
    text-align: center;
`

export const Text = styled.h2`
    color: white;
    margin: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Title = styled.h1`
    color: white;
    text-align: center;
    padding: 10px;
    margin: 5%;
`