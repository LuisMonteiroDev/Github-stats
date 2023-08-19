import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="LuisMonteiroDev" />
    </Container>
);

export default UserPicture;