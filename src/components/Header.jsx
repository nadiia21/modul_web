import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = ({ firstName, lastName}) => {
  return (
    <header>
      <h1>{firstName} {lastName}</h1>
      
      <nav>
        <Link to="/">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;
