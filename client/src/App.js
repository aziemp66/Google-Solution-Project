import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./screens/Home";
import Search from "./components/Search/SearchPage";
import InvestorPage from "./components/Investor/InvestorPage";
import ProfileInvestor from "./components/ProfileInvestor/ProfileInvestor";
import ProfileInvestment from "./components/ProfileInvestment/ProfileInvestment";
import Transaction from "./components/Transaction/Transaction";

const App = () => {
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
				<Route exact path="/transaction" component={Transaction} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
