import { FiStar } from 'react-icons/fi';
import { Container } from './styles';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
    const rating = [false, false, false, false, false]
    for (let i = 0; i < data.rating; i++) {
        rating[i] = true;
    }

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
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
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}