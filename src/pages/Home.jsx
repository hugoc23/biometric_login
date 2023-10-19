import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/loginvoz">Loginvoz</Link>
        </li>
        <li>
          <Link to="/loginrostro">Loginrostro</Link>
        </li>
        <li>
          <Link to="/loginexitoso">Loginexitoso</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/registrodevoz">Registrodevoz</Link>
        </li>
        <li>
          <Link to="/registroderostro">Registroderostro</Link>
        </li>
        <li>
          <Link to="/registroexitoso">Registroexitoso</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
