import { Container, NavLink } from "./navigation.styles"

const Navigation = () => {
    return (
        <Container>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/add">ADD</NavLink>
            <NavLink to="/view">VIEW</NavLink>
        </Container>
    )
}

export default Navigation;