import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import image from './sponsors/banners.png';


import tool from './images/tool.png';
import city from './images/city.png';
import thegoodplace from './images/thegoodplace.png';
import deepeye from './images/deepeye.png';
import hopedroid from './images/hopedroid.png';
import coding from './images/coding.png';

import screen1 from './prompts/screen1.png';
import screen2 from './prompts/screen2.png';
import screen3 from './prompts/screen3.png';
import screen4 from './prompts/screen4.png';
import screen5 from './prompts/screen5.png';
import screen6 from './prompts/screen6.png';


class App extends Component {
  handleClick = (website) => {
    window.location.href = website;
  }

  state = {
    showList: false,
    arrowDirection: 'up',
    // buttonBackground: 'white'
  }

  handleListButtonClick = () => {
    this.setState(prevState => ({ showList: !prevState.showList,
      arrowDirection: prevState.showList ? 'up' : 'down',
      buttonBackground: prevState.showList ? 'white' : '#chgbck'
    }));
  };

  render() {
    const cards = [
      {
        image: tool,
        title: "Custom Vision tool",
        website: "https://proud-tree-0f04e4e1e.1.azurestaticapps.net/"
      },
      {
        image: city,
        title: "Smart City",
        website: "https://black-river-0078aa003.2.azurestaticapps.net/"
      },
      {
        image: thegoodplace,
        title: "The Good Place",
        website: "https://proud-sea-0d4262203.1.azurestaticapps.net/"
      },
      {
        image: deepeye,
        title: "Deepeye",
        website: "https://green-sky-0ecbbd903.1.azurestaticapps.net/"
      },
      {
        image: hopedroid,
        title: "Hopedroid",
        website: "https://spaceoffice.vsantele.dev/front/"
      },
      {
        image: coding,
        title: "Gallery Project",
        website: "https://mango-river-06d670b1e.2.azurestaticapps.net/"
      }
      
    ];

    return (
      <div className={`App ${this.state.showList ? 'showList' : ''}`}>
      
        <h1 className="title">Ai-WebGenius</h1>
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card" onClick={() => this.handleClick(card.website)}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <button className={`list-button ${this.state.buttonBackground}`} onClick={this.handleListButtonClick}>
        <FontAwesomeIcon icon={this.state.arrowDirection === 'up' ? faArrowUp : faArrowDown} className="arrow-icon" />
        </button>
        {this.state.showList && (
          <ul className="list">
          <li><img src={screen1} alt="prompt"/></li>
          <li><img src={screen2} alt="prompt"/></li>
          <li><img src={screen3} alt="prompt"/></li>
          <li><img src={screen4} alt="prompt"/></li>
          <li><img src={screen5} alt="prompt"/></li>
          <li><img src={screen6} alt="prompt"/></li>
          </ul>

        )}
          <img  width="50%" src={image} alt="Description of the image" className="bottom-image" />
      </div>
    );
  }
}

export default App;

