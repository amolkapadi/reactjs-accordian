import React, { useState } from 'react';
import './App.css'; // Create this CSS file for styling
import upImg from './img/up-arrow.png';
import downImg from './img/down-arrow.png';

const App = () => {
  const fruits = [
    {
      name: 'Apple',
      description: 'Apples are nutritious. Apples may be good for weight loss and your heart.',
    },
    {
      name: 'Banana',
      description: 'Bananas are one of the world’s most popular fruits. They contain essential nutrients.',
    },
    {
      name: 'Cherry',
      description: 'Cherries are small stone fruits that come in a variety of colors and flavors.',
    },
    {
      name: 'Date',
      description: 'Dates are the fruit of the date palm tree, which is grown in many tropical regions.',
    },
    {
      name: 'Elderberry',
      description: 'Elderberries are packed with antioxidants and vitamins that may boost your immune system.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <h1 className='heading'>Fruit List</h1>
    <div className="accordion">
   
      {fruits.map((fruit, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h2 className='fruit-name'>{fruit.name}</h2>
            <img
              src={activeIndex === index ? upImg : downImg}
              alt="arrow"
              className="arrow-img"
            />
          </div>
          {activeIndex === index && <div className="accordion-content">{fruit.description}</div>}
        </div>
      ))}
    </div>
    </>
  );
};

export default App;
