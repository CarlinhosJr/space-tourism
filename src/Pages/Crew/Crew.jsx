import React from 'react';
import { Link } from 'react-router-dom';

const Crew = () =>{
  return (
    <div> 
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">00 home</Link>
          </li>
          <li>
            <Link to="/destination">01 destination</Link>
          </li>
          <li>
            <Link to="/crew">03 crew</Link>
          </li>
          <li>
            <Link to="/technology">04 technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Crew;