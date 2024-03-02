import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { MovieDetails } from "../../components/MovieDetails";
import { Section } from "../../components/Section";
import { Container, Content } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        //navigate("/");
        navigate(-1);
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movies/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <div className="backLink">
                    <Link to="/">
                        <FiArrowLeft />
                        <label>Voltar</label>
                    </Link>
                </div>

                {
                    data &&
                    <Section>
                        <MovieDetails 
                        id={params.id}
                        data={{
                            title: data.title,
                            author: "Paulo Roberto",
                            date: data.created_at.split(" ", 2)[0].replace(/-/g, "/"),
                            hour: data.created_at.split(" ", 2)[1],
                            description: data.description,
                            rating: data.rating,
                            tags: data.tags
                        }}
                        />
                    </Section>

                }
            </Content>
        </Container>
    )
}