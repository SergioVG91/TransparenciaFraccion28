import React from 'react';
import * as Icons from 'react-icons/all';
import '../assets/styles/components/menu.scss';

const Menu = (props) => {
  const { menu } = props;
  const handleSections = (item) => {
    return (
      <div className="menu__elements" key={item.key}>
        <a className="menu__link" href="/">
          {item.name}
        </a>
      </div>
    );
  };
  return (
    <div className="menu">
      <p className="menu__label">
        Menu
        {React.createElement(Icons['FiMenu'], { className: 'margin-left' })}
      </p>
      {menu.map((element) => {
        return (
          <div className="menu__section" key={element._id}>
            <button className="menu__button" type="button">
              {element.module}
              {React.createElement(Icons[element.icon], { className: 'margin-left' })}
            </button>
            {element.section.map(handleSections)}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
