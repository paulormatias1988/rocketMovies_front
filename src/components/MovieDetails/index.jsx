import { FiStar, FiClock } from 'react-icons/fi';
import { Container } from './styles';
import { Tag } from '../Tag';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';


export function MovieDetails({ data, id, ...rest }) {
    const { user } = useAuth();

    const navigate = useNavigate();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const rating = [false, false, false, false, false]

    for (let i = 0; i < data.rating; i++) {
        rating[i] = true;
    }

    function handleNewDetails(){
        navigate(`/new/${id}`)
    }

    return (
        <Container {...rest}>
            <div className='head'>
                <h1 onClick={handleNewDetails}>{data.title}</h1>
                <div>
                {
                    rating.map((star, index) => star === true ?
                        <FiStar
                            key={index}
                            className="full"
                        /> : 
                        <FiStar
                            key={index}
                            className="line"
                        />)
                }
                </div>
            </div>
            <div className='dataStatus'>
                    <div className='imgMovie'>
                        <img src={avatarUrl}
                            alt={user.name}
                        />
                    </div>

                    <div>
                        Por {user.name}
                    </div>

                    <div className='clock'>
                        <FiClock />
                    </div>

                    <div>
                        {data.date} às {data.hour}
                    </div>
            </div>
            <div className='tags'>
                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }
            </div>
            <p>{data.description}</p>
        </Container >
    )
}