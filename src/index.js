import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cul from './cul'

class App extends React.Component {

  render() {
    return (
      <div>
        <Cul/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
