import './detail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../../redux/actions';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams();  
  const info = useSelector ((state) => state.details);
  const features = useSelector ((state) => state.detailsFeatures);
  const highlights = useSelector ((state) => state.detailsHighlights);
  
  useEffect (()=> {
    dispatch(productDetail(id));
  }, [id]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const item =
    features.map(e => (
      <div className='slide' key={e.name}>
        <img src={e.image} alt='Imagen descriptiva de la característica'/>
        <h3 className='nombre'>{e.name}</h3>
        <p className='descripcion'>{e.description}</p>
      </div>
      ))
      
  const items = [...item, ...item]

  return (
    <div className='containerDetail'>
      <div className="detail">
        <img src={info.photo} alt="Imagen del producto" />
        <h4>{info.name}</h4>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </div>
      <AliceCarousel
        keyboardNavigation={true}
        mouseTracking
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
      <div className="highlights">
        {
          highlights.map(e => (
          <div className="moredetails" key={e.title}>
            <img src={e.image} alt='Imagen descriptiva de la característica' />
            <div>
              <h3>{e.title}</h3>
              <p>{e.content}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default Detail;