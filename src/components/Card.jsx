import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='Card'>
      <div className='Card-header'>
        <h2>Título de la tarjeta</h2>
      </div>
      <div className='Card-body'>
        {children}
      </div>
      <div className='Card-footer'>
        <p>Texto del pie de página</p>
      </div>
    </div>
  );
};

export default Card;