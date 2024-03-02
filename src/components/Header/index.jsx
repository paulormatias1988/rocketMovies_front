import { Container, Profile, Brand, Search, Perfil, Botao } from './styles';
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({onSearchChange}) {
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile >
                <Brand to="/">
                    <h1>RocketMovies</h1>
                </Brand>
                <Search>
                    <Input
                        placeholder="Pesquisar pelo título"
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </Search>
                <Perfil>
                    <div>
                        <Botao to={"/profile"}>
                            <strong>{user.name}</strong>
                        </Botao>
                        <Botao>
                            <span onClick={handleSignOut}>Sair</span>
                        </Botao>
                    </div>
                    <Botao to={"/profile"}>
                        <img src={avatarUrl}
                            alt={user.name}
                        />
                    </Botao>
                </Perfil>
            </Profile>
        </Container >
    );
}