import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    border: none;
    border-bottom: 1px solid white;
    padding: 2%;
    display: flex;
    justify-content: space-evenly;
`

export const NavLink = styled(Link)`
    font-size: 22px;
    padding: 10px;
    text-decoration: none;
    color: white;
    transition: 0.5s;
    border: 1px solid cyan;
    border-radius: 15px;
    &:hover {
        transform: scale(1.2);
    }
`