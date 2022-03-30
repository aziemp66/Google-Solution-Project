import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./screens/HomeScreens";
import Search from "./components/Search/SearchPage";
import InvestorPage from "./components/Investor/InvestorPage";
import BusinessPage from "./components/Business/BusinessPage";
import ProfileInvestor from "./components/ProfileInvestor/ProfileInvestor";
import ProfileInvestment from "./components/ProfileInvestment/ProfileInvestment";
import Transaction from "./components/Transaction/Transaction";
import InvestSuccess from "./components/Transaction/InvestSuccess";
import InvestFailed from "./components/Transaction/InvestFailed";


// import ArticleDetail from "./components/Article/ArticleDetail";
import Article from "./components/Article/ArticleDetail";
import ArticleList from "./components/Article/ArticleList";
import authService from "./services/authService";
import LoginScreensInvestor from "./screens/LoginScreensInvestor";
import RegisterScreensInvestor from "./screens/RegisterScreensInvestor";
import LoginScreensBusiness from "./screens/LoginScreensBusiness";
import RegisterScreensBusiness from "./screens/RegisterScreensBusiness";



const App = () => {
	
  const [user, setUser] = useState(authService.getUser());
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };
	
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search" component={Search} />
				<Route
					exact
					path="/profileinvestor"
					component={ProfileInvestor}
				/>
				<Route
					exact
					path="/profileinvestment"
					component={ProfileInvestment}
				/>
				<Route exact path="/investor" component={InvestorPage} />
				<Route exact path="/business" component={BusinessPage} />
				<Route exact path="/transaction" component={Transaction} />
				<Route exact path="/investsuccess" component={InvestSuccess} />
				<Route exact path="/investfailed" component={InvestFailed} />
				<Route exact path="/logininvestor" component={LoginScreensInvestor} />
				<Route exact path="article/:name" component={Article} />
				<Route exact path="/articlelist" component={ArticleList} />
				<Route exact path="/login" component={LoginScreensInvestor} />
				<Route exact path="/signup" component={RegisterScreensInvestor} />
				<Route exact path="/logininvestor" component={LoginScreensInvestor} />
				<Route
				  exact
				  path="/signupinvestor"
				  component={RegisterScreensInvestor}
				/>
				<Route exact path="/loginbusiness" component={LoginScreensBusiness} />
				<Route
				  exact
				  path="/signupbusiness"
				  component={RegisterScreensBusiness}
				/>

			</Switch>
		</BrowserRouter>
	);
};

export default App;
