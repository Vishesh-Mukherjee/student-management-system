import { Container, LinkDiv, Links, CustomLink, Text, Title } from "./home.styles"

const Home = () => {
    return (
        <Container>
            <Title>STUDENT MANAGEMENT SYSTEM</Title>
            <Links>
                <LinkDiv><CustomLink to="/project/sms/add"><Text>ADD</Text></CustomLink></LinkDiv>
                <LinkDiv ><CustomLink to="/project/sms/view"><Text>VIEW</Text></CustomLink></LinkDiv>
            </Links>
        </Container>
    )
}

export default Home;