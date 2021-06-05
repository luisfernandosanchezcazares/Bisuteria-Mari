import './App.css';
import './Style/Bisuteria.css';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'

import MainPage from './Pages/MainPage'
import Details from './Pages/Details'

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
        </Switch>              
      </Router>
    </div>
  );
}

export default App;
