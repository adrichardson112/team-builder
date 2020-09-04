import React, {useState} from 'react';
import Members from './Members';
import Form from './Form';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: "Ashley",
      email: "adrichardson112@gmail.com",
      role: "Front-End Specialist"
    }
  ]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
