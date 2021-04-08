import { useHistory } from 'react-router';
import './card.css';


export const Card = (props) => {
    const { push } = useHistory()
    return (
        <div className="card" onClick={() => push('/search')}>
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}