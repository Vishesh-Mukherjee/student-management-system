import { Container, LinkDiv, Links, CustomLink, Text, Title } from "./home.styles"

const Home = () => {
    return (
        <Container>
            <Title>STUDENET MANAGEMENT SYSTMEM</Title>
            <Links>
                <LinkDiv><CustomLink to="/add"><Text>ADD</Text></CustomLink></LinkDiv>
                <LinkDiv ><CustomLink to="/view"><Text>VIEW</Text></CustomLink></LinkDiv>
            </Links>
        </Container>
    )
}

export default Home;