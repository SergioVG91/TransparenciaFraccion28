import React from 'react';
import { FaCheck as IconoLi, FaUser, FaClipboardList, FaHouzz } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import '../assets/styles/components/home.scss';

const Home = () => (
  <section className="home">
    <div className="home__menu">
      <p className="home__menu-label">
        Menu
        <FiMenu className="margin-left" />
      </p>
      <div className="home__menu-section">
        <button className="home__menu-button" type="button">
          Usuarios
          <FaUser className="margin-left" />
        </button>
        <div className="home__menu-elements">
          <a className="home__menu-link" href="/">
            Agregar usuario
          </a>
          <a className="home__menu-link" href="/">
            Modificar usuario
          </a>
          <a className="home__menu-link" href="/">
            Eliminar usuario
          </a>
        </div>
      </div>
      <div className="home__menu-section">
        <button className="home__menu-button" type="button">
          Obras
          <FaHouzz className="margin-left" />
        </button>
        <div className="home__menu-elements">
          <a className="home__menu-link" href="/">
            Formato 28A
          </a>
          <a className="home__menu-link" href="/">
            Formato 28B
          </a>
        </div>
      </div>
      <div className="home__menu-section">
        <button className="home__menu-button" type="button">
          Reportes
          <FaClipboardList className="margin-left" />
        </button>
        <div className="home__menu-elements">
          <a className="home__menu-link" href="/">
            Descargar todas las obras
          </a>
        </div>
      </div>
    </div>
    <div className="home__container">
      <h1 className="home__title">Bienvenido Administrador</h1>
      <p>Aquí podrá tener control total del sistema y llevar acabo las siguientes funciones:</p>
      <ul className="home__list">
        <li>
          <IconoLi />
          Agregar Usuarios
        </li>
        <li>
          <IconoLi />
          Modificar Usuarios
        </li>
        <li>
          <IconoLi />
          Eliminar Usuarios
        </li>
        <li>
          <IconoLi />
          Agregar Obras
        </li>
        <li>
          <IconoLi />
          Modificar Obras
        </li>
        <li>
          <IconoLi />
          Eliminar Obras
        </li>
        <li>
          <IconoLi />
          Generar Reportes
        </li>
      </ul>
    </div>
  </section>
);

export default Home;
