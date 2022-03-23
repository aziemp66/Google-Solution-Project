import React from 'react';
import {
 BrowserRouter,
 Route,
 Switch 
} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './screens/Home';
import Search from "./components/Search/SearchPage" ;
import InvestorPage from "./components/Investor/InvestorPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/investor" component={InvestorPage} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
