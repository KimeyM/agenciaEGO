import './header.css';
import logo from '../../img/logo.svg'
import Menu from '../menu/menu.jsx';
import { Link, useLocation, useParams } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const {id} = useParams();

  var path = location.pathname

  return (
    <>
      <header>
        <div className="header">
          <figure>
            <Link to='/' style={{textDecoration: 'none'}}>
              <img src={logo} alt="Logo de EGO" />
            </Link>
          </figure>
          <div className='select' style={{borderBottom: path === `/` ? '4px solid var(--redheader)' : null}}> 
            <Link to='/' style={{textDecoration: 'none'}}>
              <p style={{color: path === `/` ? 'var(--redheader)' : null}}>
              Modelos
              </p>
            </Link>
          </div>
          <div className='select' style={{borderBottom: path === `/${id}` ? '4px solid var(--redheader)' : null}}>
            <p style={{cursor:'pointer', color: path === `/${id}` ? 'var(--redheader)' : null}}>
              Ficha de modelo
            </p>
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
}

export default Header;