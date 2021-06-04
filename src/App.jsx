import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Products from './Components/Products';
import Footer from './Components/Footer';
import FooterSm from './Components/FooterSm';
import './Style/Bisuteria.css';
import DetailsImg from './Components/DetailsImg.jsx'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom'

import MainPage from './Pages/MainPage'
import Prueba from './Pages/Prueba'
  


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <MainPage/>
          </Route>
          <Route path = '/Prueba'>
              <Prueba/>
          </Route>
        </Switch>              
      </Router>
    </div>
  );
}

export default App;
