import './App.css';
import './Style/Bisuteria.css';
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
