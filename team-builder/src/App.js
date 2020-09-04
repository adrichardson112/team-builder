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
      role: "Front-End Specialist",
      hobbies: "Reading and Sports"
    },
    {
      id: 2,
      name: "Melanie",
      email: "melanie-chele@lambdastudents.com",
      role: "Full Stack Developer",
      hobbies: "Video Games and Reading"
    }
  ]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      hobbies: formData.hobbies
    };
    setTeamList([...teamList, newMember]);
  };


  return (
    <div className="App">
      <h1>Let's Meet The Team!</h1>
      <Form addNewMember={addNewMember} />
      <Members member={member} />
    </div>
  );
  }
      

export default App;
