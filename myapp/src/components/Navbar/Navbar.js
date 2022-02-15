import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/city/:id'>FaVCity</Link>
      </nav>
      <h1 className='appName'>Travel App</h1>
    </>
  );
}

export default NavBar;
