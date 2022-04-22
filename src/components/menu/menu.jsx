import './menu.css';
import menuimg from '../../img/gray.svg'
import closeimg from '../../img/fill-1.svg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  const [activeMenu, setActiveMenu] = useState(false)
  const menu = {
    first: ["Servicios y Accesorios", "Financiación", "Reviews y Comunidad"],
    second: ["Toyota Mobility Service", "Toyota Gazoo Racing", "Toyota Híbridos"],
    third: ["Concesionarios", "Test Drive", "Contacto"],
    fourth: ["Actividades", "Servicios al Cliente", "Ventas Especiales", "Innovación", "Prensa", "Acerca de..."]
}
  return (
    <div className='divMenu'>
      <p className='textMenu'>Menú</p>
      <img src={menuimg} className='imgMenu' onClick={() => setActiveMenu(!activeMenu)} />
        {activeMenu &&
          <div className='divActiveMenu'>
            <div className='divCloseMenu' onClick={() => setActiveMenu(!activeMenu)}>
              <p className='textCerrar'>Cerrar</p>
              <img src={closeimg} className='imgCerrar' alt="" />
            </div>
            <div className='divSectionsMenu'>
              <Link to="/"
                  className='linkModelos'
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{textDecoration:'none'}}>
                  Modelos
              </Link>
              {menu.first.map((e, index) =>
                <p key={index}>{e}</p>
              )}
            </div>
            <hr className='hr' />
            <div className='divSectionsMenu'>
              {menu.second.map((e, index) =>
                  <p key={index}>{e}</p>
              )}
            </div>
            <hr className='hr2' />
            <div className='divSectionsMenu'>
              {menu.third.map((e, index) =>
                  <p key={index}>{e}</p>
              )}
            </div>
            <div className='divSectionsMenuGray'>
              {menu.fourth.map((el, index) =>
                  <p key={index}>{el}</p>
              )}
            </div>
          </div>
        }
    </div>
  );
}

export default Menu;