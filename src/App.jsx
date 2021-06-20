import './App.css';
import './Style/Bisuteria.css';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'

import MainPage from './Pages/MainPage'
import Details from './Pages/Details'
import Necklaces from './Pages/Necklaces';
import Earrings from './Pages/Earrings';
import Wristband from './Pages/Wristband';
import Questions from './Pages/Questions';
import About from './Pages/About';
import Ejemplo from './Pages/Ejemplo'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <MainPage/>
          </Route>
          <Route path = '/Details'>
         <Details></Details>
          </Route>

          <Route path = '/Necklaces'>
         <Necklaces></Necklaces>
          </Route>

          <Route path='/Earrings'>
            <Earrings></Earrings>
          </Route>

          <Route path='/Wristband'>
            <Wristband></Wristband>
          </Route>
          <Route path='/Ejemplo'>
            <Ejemplo/>
          </Route>

          <Route path='/Questions'>
           <Questions></Questions>
          </Route>
         
          
          <Route path='/About'>
           <About></About>
          </Route>
          
          
        </Switch>              
      </Router>
    </div>
  );
}

export default App;
