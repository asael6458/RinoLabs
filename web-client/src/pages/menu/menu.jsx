import React from 'react';
import './menu.css';
import ShadowButton from '../../components/shadow-button/shadow-button';


  function Menu() {
    return (
      <div className="contenedor">
        <div className="fila">
          <div className="recuadro">
            <h2 style={{ fontSize: '11px' }}>Prueba 1</h2>
            <ShadowButton text="Prueba 1" />
            <h2 style={{ fontSize: '11px' }}>Prueba 2</h2>
            <ShadowButton text="Prueba 2" />
          </div>
          <h1 className="inventario">Inventario</h1>
        </div>
        <div className="recuadro segunda-recuadro">
          <h2><ShadowButton text="Prueba 1" /></h2>
          <h1>Prueba 3</h1>
          <h2>Prueba 4</h2>
          <h2>Prueba 5</h2>
          <h1>Prueba 6</h1>
        </div>
      </div>
    );
  }

export default Menu;
