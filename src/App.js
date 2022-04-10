import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/RegisterDriver'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
