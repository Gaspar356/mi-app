import { useState } from 'react';
import Logo from './Logo1.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log('Buscando:', search);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link to="/">
        <img src={Logo} alt="Logo" style={{ height: '120px', cursor: 'pointer' }} />
        </Link>
        <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
          {/* SEARCH FORM */}
          <form className="d-flex me-3 w-50" onSubmit={handleSearch}>
            <input
              className="form-control me-2 bg-dark text-white"
              type="search"
              placeholder="Search your favorite game"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

         {/* NAVBAR LINKS */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu bg-dark rounded-0" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item text-white" href="#">FPS</a></li>
                <li><a className="dropdown-item text-white" href="#">MOBA</a></li>
                <li><a className="dropdown-item text-white" href="#">Adventure</a></li>
                <li><a className="dropdown-item text-white" href="#">Sandbox</a></li>
                <li><a className="dropdown-item text-white" href="#">Aventure</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Best Sellers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Offers</a>
            </li>
          </ul>
        </div>

        {/* USER AND CART */}
        <div className="d-flex">
          <button className="btn btn-outline-success border-0 me-2" type="button">
            <i className="bi bi-cart2 fs-3"></i>
          </button>
        <Link to="/create-user" className="btn btn-outline-success border-0">
          <i className="bi bi-person-fill fs-3"></i>
        </Link>

        </div>
      </div>
    </nav>
  );
};

export default Header;

