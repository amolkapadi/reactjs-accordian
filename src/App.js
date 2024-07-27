import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file and add the styles
import htmlImg from './img/html.png';
import cssImg from './img/css-3.png';
import javascriptImg from './img/java-script.png';
import reactImg from './img/react.png';
import nodeImg from './img/node-js.png';
import pythonImg from './img/python.png';

const App = () => {
  const initialLanguages = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'JavaScript', img: javascriptImg },
    { name: 'React.js', img: reactImg },
    { name: 'Node.js', img: nodeImg },
    { name: 'Python', img: pythonImg },
  ];
  
  const [languages, setLanguages] = useState(initialLanguages);
  const [showModal, setShowModal] = useState(false);
  const [checkedLanguages, setCheckedLanguages] = useState(
    initialLanguages.reduce((acc, language) => {
      acc[language.name] = true;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (language) => {
    setCheckedLanguages((prevState) => ({
      ...prevState,
      [language]: !prevState[language],
    }));
  };

  const handleSave = () => {
    const updatedLanguages = initialLanguages.filter(
      (language) => checkedLanguages[language.name]
    );
    setLanguages(updatedLanguages);
    setShowModal(false);
  };

  return (
    <div className="app">
      <button className="settings-btn" onClick={() => setShowModal(true)}>
        Settings
      </button>
      <div className="container">
        {languages.map((language, index) => (
          <div className="card" key={index}>
            <img src={language.img} alt={language.name} className="language-img" />
              <h4>{language.name}</h4>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Settings</h2>
            <div className="checkboxes">
              {initialLanguages.map((language) => (
                <label key={language.name}>
                  <input
                    type="checkbox"
                    checked={checkedLanguages[language.name]}
                    onChange={() => handleCheckboxChange(language.name)}
                  />
                  {language.name}
                </label>
              ))}
            </div>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
