import { Container } from "../components/container/styles";
import { Header}  from "../components/header";
import UserContainer from "../components/userContainer";
import { ProfilePicture } from "../components/userPicture/styles";

function home() {
    return(
        <Container>
            <Header/>
            <UserContainer>
                <ProfilePicture src="https://avatars.githubusercontent.com/u/109322475?v=4" alt="image-test" />
            </UserContainer>
        </Container>
    )
} 

export default home;