import React, { useState } from 'react';
import product_card from '../data/programData';
import Box from '@material-ui/core/Box';
import './Filter.css';

const Maincontent = () => {
  const [menuItem, setMenuItem] = useState(product_card);

  const listItems = menuItem.map((item) => (
    <Box p={1} m={1}>
      <Box className='card' key={item.id}>
        <Box p={3} className='card_img'>
          <img src={item.thumb} />
        </Box>
        <Box className='card_header'>
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>

          <p className='price'>
            {item.currency}
            <span>{item.price}</span>
          </p>
        </Box>

        <button className='btn'>Book Now</button>
      </Box>
    </Box>
  ));

  const all = () => {
    setMenuItem(product_card);
    return;
  };

  const filter = (button) => {
    const filteredData = product_card.filter(
      (item) => item.product_name === button,
    );
    setMenuItem(filteredData);
  };

  console.log(menuItem);

  return (
    <div className='main_content'>
      <div className='buttons'>
        <button className='filter ' onClick={all}>
          All
        </button>
        <button className='filter ' onClick={() => filter('Sedan')}>
          Sedan
        </button>
        <button className='filter ' onClick={() => filter('Hatchback')}>
          Hatchback
        </button>
        <button className='filter ' onClick={() => filter('SUV')}>
          SUV
        </button>
        <button className='filter ' onClick={() => filter('Convertible')}>
          Convertible
        </button>
        <button className='filter ' onClick={() => filter('Coupe')}>
          Coupe
        </button>
        <button className='filter ' onClick={() => filter('Pick Up')}>
          Pick Up
        </button>
      </div>
      <div className='heading'>
        <h3>Available Cars</h3>
      </div>
      <div className='content'>{listItems}</div>
    </div>
  );
};
export default Maincontent;
