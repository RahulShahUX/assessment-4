import logo from './logo.svg';
import Checklist from './components/Checklist/Checklist';
import AppContext from './components/AppContext';
import { useState } from 'react';
import "./App.css";

function App() {
  const [user, setUser] = useState([
    { name: "Are you a Citizen", isChecked: true },
    { name: "Are you over 21", isChecked: false },

  ])
  return (
    <AppContext.Provider value={user}>
      <Checklist />
    </AppContext.Provider>
  );
}

export default App;
