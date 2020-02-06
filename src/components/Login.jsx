import React from 'react';
import '../assets/styles/components/login.scss';
import loginImg from '../assets/static/login.png';

const Login = () => (
  <section className="login">
    <div className="login__container">
      <img className="login__img" src={loginImg} alt="log" />
      <form className="login__form">
        <input className="login__input" type="text" placeholder="Usuario" />
        <input className="login__input" type="text" placeholder="Contraseña" />
        <button className="login__button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  </section>
);

export default Login;
