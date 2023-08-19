import { Container } from "../components/container/styles";
import { Header}  from "../components/header";
import UserContainer from "../components/userContainer";

function home() {
    return(
        <Container>
            <Header/>
            <UserContainer>

            </UserContainer>
        </Container>
    )
} 

export default home;