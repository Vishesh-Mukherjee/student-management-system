import { Container, NavLink } from "./navigation.styles"

const Navigation = () => {
    return (
        <Container>
            <NavLink to="/project/sms">HOME</NavLink>
            <NavLink to="/project/sms/add">ADD</NavLink>
            <NavLink to="/project/sms/view">VIEW</NavLink>
        </Container>
    )
}

export default Navigation;