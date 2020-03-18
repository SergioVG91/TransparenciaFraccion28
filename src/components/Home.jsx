import React from 'react';
import { FaCheck as IconoLi } from 'react-icons/fa';
import '../assets/styles/components/home.scss';
import Menu from './Menu';
import archivo from '../../archivo';

const Home = () => (
  <section className="home">
    <div className="home__menu">
      <Menu menu={archivo.menu} />
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
