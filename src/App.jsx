import './App.css';
import './Style/Bisuteria.css';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Details from './Pages/Details'
import Necklaces from './Pages/Necklaces'
import Earrings from './Pages/Earrings'
import Wristband from './Pages/Wristband'
import Questions from './Pages/Questions'
import About from './Pages/About'
import Search from './Pages/Search'
import Upload from './Pages/Upload'
import LogIn from './Pages/LogIn'

function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <MainPage/>
          </Route>
          <Route path = '/Details'>
            <Details/>
          </Route>
          <Route path = '/Necklaces'>
            <Necklaces/>
          </Route>
          <Route path = '/Earrings'>
            <Earrings/>
          </Route>
          <Route path = '/Wristband'>
            <Wristband/>
          </Route>
          <Route path = '/Search'>
            <Search/>
          </Route>
          <Route path = '/Upload'>
            <Upload/>
          </Route>
          <Route path = '/Questions'>
           <Questions/>
          </Route>
          <Route path = '/About'>
           <About/>
          </Route>
          <Route path = '/LogIn'>
           <LogIn/>
          </Route>
        </Switch>              
      </Router>
    </div>
  );
}

export default App;
