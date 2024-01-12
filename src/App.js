import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">Logo</div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className='header-buttons'>
          <button>Log In</button>
          <button className='custom-button'>Start now</button>
        </div>
      </header>

      <div className="component">
        <div className='section'>
          <h1>Simplify your online shipping for free this month!</h1>
          <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.</p>
          <button className='custom-button'>Start free trial</button>
          <button className='custom-button1'>Learn more</button>
        </div>
      </div>

      <div className="component">
        <div className='section'>
          <h2>Grow your business with better Shipping</h2>
          <p>We help the world’s leading organizations follow their shipping</p>
        </div>
        <div className="sub-grow-bussiness" >
          {/* Section 1 */}
          <div className="section">
            <div className="icon"><FontAwesomeIcon icon={faSuitcase} /></div>
            <h3>Shipping communication</h3>
            <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
            <a href="#">Discover</a>
          </div>

          {/* Section 2 */}
          <div className="section">
            <div className="icon"><FontAwesomeIcon icon={faLifeRing} /></div>
            <h3>Marketing</h3>
            <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed</p>
            <a href="#">Discover</a>
          </div>

          {/* Section 3 */}
          <div className="section">
            <div className="icon"><FontAwesomeIcon icon={faWrench} /></div>
            <h3>Logistic performance</h3>
            <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed</p>
            <a href="#">Discover</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
