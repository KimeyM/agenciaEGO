import './cards.css';
import React from 'react';
import Card from '../card/card';
import up from '../../img/up.svg'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, orderCars, sedanHatchback, pickups, suvs } from '../../redux/actions.js';


function Cards() {

  const dispatch = useDispatch();
  const allCars = useSelector ((state) => state.cars);
  const [orden, setOrden] = useState('');
  const [filter, setFilter] = useState('');
  const [ menuOrder, setMenuOrder ] = useState(false)
  const [ menuFilter, setMenuFilter ] = useState(false)


  useEffect (() => {
    dispatch(getCars());
  }, [dispatch]); 

  function handleSort (e) {
    dispatch(orderCars(e));
    setOrden(e);
  };

  function handleReset () {
    dispatch(getCars());
    setOrden('none');
    setFilter('none');
  };

function filterSedanHatchback (e){
  dispatch(sedanHatchback(e.target.value));
  setFilter('auto')
}
function filterPickups (e){
  dispatch(pickups(e.target.value));
  setFilter('pickup')
}
function filterSuvs (e){
  dispatch(suvs(e.target.value));
  setFilter('suvs')
}

  return (
    <div className="cards">
        <div className="navbar">
          <div className='filterWeb'>
            <p className='first'>Filtrar por</p>
            <button
              className='filters'
              style={{borderRadius: '30px', backgroundColor: filter === 'none' ? 'rgba(209, 214, 214, 0.2)' : null }}
              onClick={handleReset}>
                Todos
            </button>
            <button 
              className='filters'
              style={{borderRadius: '30px', backgroundColor: filter === 'auto' ? 'rgba(209, 214, 214, 0.2)' : null }}
              onClick={filterSedanHatchback}>Autos</button>
            <button 
              className='filters'
              style={{borderRadius: '30px', backgroundColor: filter === 'pickup' ? 'rgba(209, 214, 214, 0.2)' : null }}
              onClick={filterPickups}>Pickups y Comerciales</button>
            <button 
              className='filters'
              style={{borderRadius: '30px', backgroundColor: filter === 'suvs' ? 'rgba(209, 214, 214, 0.2)' : null }}
              onClick={filterSuvs}>SUVs y Crossovers</button>
          </div>
          <div className='filterMobile' onClick={() => setMenuFilter(!menuFilter)}>
            <p className='pFilterBy'>Filtrar por </p>
            {menuFilter ? <img src={up} alt="" /> : <img className='down' src={up} alt="" /> }
            {
              menuFilter &&
              <div className='divFilterAct'>
                <button
                  style={{backgroundColor: filter === 'none' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={handleReset}
                >
                  Todos
                </button>
                <button
                  style={{ backgroundColor: filter === 'auto' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={filterSedanHatchback}>
                  Autos
                </button>
                <button
                  style={{ backgroundColor: filter === 'pickups' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={filterPickups}>
                  Pickups y Comerciales
                </button>
                <button
                  style={{ backgroundColor: filter === 'suvs' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={filterSuvs}>
                  SUVs y Crossovers
                </button>
              </div>
            }
          </div>
          <div className='divOrder' onClick={() => setMenuOrder(!menuOrder)}>
            <p className='pOrderBy'>Ordenar por </p>
            {menuOrder ? <img src={up} alt="" /> : <img className='down' src={up} alt="" /> }
            {
              menuOrder &&
              <div className='divOrderAct'>
                <button
                  value='none'
                  style={{backgroundColor: orden === 'none' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={() => handleSort('none')}
                >
                  Nada
                </button>
                <button
                  value='price_asc'
                  style={{ backgroundColor: orden === 'price_asc' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={() => handleSort('price_asc')}>
                  De <strong>menor</strong> a <strong>mayor</strong> precio
                </button>
                <button
                  value='price_desc'
                  style={{ backgroundColor: orden === 'price_desc' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={() => handleSort('price_desc')}>
                  De <strong>mayor</strong> a <strong>menor</strong> precio
                </button>
                <button
                  value='newest'
                  style={{ backgroundColor: orden === 'newest' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={() => handleSort('newest')}>
                  Más <strong>nuevos</strong> primero
                </button>
                <button
                  value='oldest'
                  className='lastbtn'
                  style={{ backgroundColor: orden === 'oldest' ? 'rgba(209, 214, 214, 0.2)' : null }}
                  onClick={() => handleSort('oldest')}>
                  Más <strong>viejos</strong> primero
                </button>
              </div>
            }
          </div>
        </div>
        <div className='gridcards'>
          {allCars?.map(el => { 
              return(
                  <div className='carCards' key={el.id}>
                          <Card
                          id = {el.id}
                          name = {el.name}
                          year = {el.year}
                          price = {el.price}
                          photo = {el.photo}
                          />
                  </div>
              );
          })
          }
        </div>
    </div>
  );
}

export default Cards;