// import logo from './logo.svg';
import './App.css';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Home } from './Components/Home';
// import { Login } from './Components/Login';
// import { Register } from './Components/Register';
// import { Employee } from './Components/Employee';
import { Navbar } from './Components/Navbar';
import { RoutesComponent } from './Routes/Routers';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <RoutesComponent/>
    </div>
  );
}

export default App;
