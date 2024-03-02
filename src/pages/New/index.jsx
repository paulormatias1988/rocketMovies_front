import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Content, Form } from "./styles";
import { api } from "../../services/api";

export function New() {
    const params = useParams();

    //const [data, setData] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [idMovie, setIdMovie] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }


    if (params.id) {
        useEffect(() => {
            async function fetchMovie() {
                const response = await api.get(`/movies/${params.id}`);
                setTitle(response.data.title);
                setRating(response.data.rating);
                setDescription(response.data.description);
                setIdMovie(params.id);

                const arrayTags = []
                for (let index = 0; index < response.data.tags.length; index++) {
                    arrayTags.push(response.data.tags[index].name)
                }
                setTags(arrayTags)
            }
            fetchMovie();
        }, []);

        async function handleRemove() {
            const confirm = window.confirm("Deseja realmente remover a nota?");

            if (confirm) {
                await api.delete(`/movies/${params.id}`);
                navigate("/");
            }
        }

        async function handleUpdateMovie() {

            if (!title) {
                return alert("Digite o título do filme.");
            }

            if (!rating) {
                return alert("Digite a nota do filme.");
            }

            if (newTag) {
                return alert("Você deixou uma tag no campo adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio.");
            }

            await api.patch(`/movies/${params.id}`, {
                title,
                description,
                rating,
                tags,
                idMovie
            });

            alert("Filme atualizado com sucesso");
            navigate(-1);
        }


        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <div className="backLink">
                            <Link to="/">
                                <FiArrowLeft />
                                <label>Voltar</label>
                            </Link>
                        </div>
                        <header>
                            <h1>Atualizando Filme</h1>
                        </header>

                        <div className="inputs">
                            <Input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Input
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>

                        <div className="textArea">
                            <Textarea
                                defaultValue={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <Section title="Marcadores">
                            <div className="tags">
                                {
                                    tags.map((tag, index) => (
                                        <MovieItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }
                                <MovieItem
                                    isNew
                                    placeholder="Novo marcador"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>

                        <div className="buttonActions">
                            <Button title="Excluir filme" onClick={handleRemove} />
                            <Button
                                title="Salvar alterações"
                                onClick={handleUpdateMovie}
                            />
                        </div>
                    </Form>
                </Content>
            </Container>
        );

    } else {
        async function handleNewMovie() {
            if (!title) {
                return alert("Digite o título do filme.");
            }

            if (!rating) {
                return alert("Digite a nota do filme.");
            }

            if (newTag) {
                return alert("Você deixou uma tag no campo adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio.");
            }

            await api.post("/movies", {
                title,
                description,
                rating,
                tags
            });

            alert("Filme cadastrado com sucesso");
            navigate(-1);
        }

        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <div className="backLink">
                            <Link to="/">
                                <FiArrowLeft />
                                <label>Voltar</label>
                            </Link>
                        </div>
                        <header>
                            <h1>Novo filme</h1>
                        </header>

                        <div className="inputs">
                            <Input
                                placeholder="Título"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Input
                                placeholder="Sua nota (de 0 a 5)"
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>

                        <div className="textArea">
                            <Textarea
                                placeholder="Observações"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <Section title="Marcadores">
                            <div className="tags">
                                {
                                    tags.map((tag, index) => (
                                        <MovieItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }
                                <MovieItem
                                    isNew
                                    placeholder="Novo marcador"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>

                        <div className="buttonActions">
                            <Button title="Excluir filme" onClick={handleBack} />
                            <Button
                                title="Salvar Filme"
                                onClick={handleNewMovie}
                            />
                        </div>
                    </Form>
                </Content>
            </Container>
        );
    }


}