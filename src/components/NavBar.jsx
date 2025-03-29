import { Link } from 'react-router-dom';

function NavBar() {
  // utilizzo il Link component per essere indirizzato ad una pagina tramite Router
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='navbar-links'>
        <Link
          to='/'
          className='nav-lnk'
        >
          Home
        </Link>
        <Link
          to='/favorites'
          className='nav-lnk'
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
