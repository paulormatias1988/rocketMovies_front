import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';
import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Section } from "../../components/Section";

export function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header onSearchChange={setSearch} />
            <Content>
                <div>
                    <h2>Meus Filmes</h2>

                    <NewMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewMovie>
                </div>

                <Section>
                    {
                        movies.map(movie => (
                            <Movie
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }
                </Section>


            </Content>
        </Container>
    );
}