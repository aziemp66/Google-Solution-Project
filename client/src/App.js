import React from 'react';
import {
 BrowserRouter,
 Route,
 Switch 
} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './screens/Home';
import Search from "./Components/Search/Search" ;

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/seach" component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
