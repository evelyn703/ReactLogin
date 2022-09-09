import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from './Login';
import About from './About';

function App() {
  return (
    <Router>

      <div className="App">

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/About' element={<About />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
