import './card.css';
import {Link} from 'react-router-dom';

function Card({id, name, year, price, photo}) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h4>{year} | ${Number(price).toLocaleString()}</h4>
      <img src={photo} alt="" />
      <div className='btnbox'>
      <Link to={`/${id}`} style={{textDecoration:'none'}}>
        <button>Ver Modelo</button>
      </Link>
      </div>
    </div>
  );
}

export default Card;