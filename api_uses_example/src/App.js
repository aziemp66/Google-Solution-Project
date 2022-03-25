import "./App.css";
import axios from "axios";
import { useState } from "react";
import InvestorDetail from "./components/InvestorDetail";
import BusinessDetail from "./components/BusinessDetail";
import InvestDetail from "./components/InvestDetail";

function App() {
	const [investors, setInvestors] = useState();
	const [businesses, setBusinesses] = useState();
	const [invests, setInvests] = useState();
	const getInvestors = async () => {
		if (investors) {
			setInvestors(null);
			return;
		}
		const response = await axios.get("http://localhost:5000/investor/");
		setInvestors(response.data);
	};
	const getBusinesses = async () => {
		if (businesses) {
			setBusinesses(null);
			return;
		}
		const response = await axios.get("http://localhost:5000/business/");
		setBusinesses(response.data);
	};
	const getInvests = async () => {
		if (invests) {
			setInvests(null);
			return;
		}
		const response = await axios.get("http://localhost:5000/invest/");
		setInvests(response.data);
	};
	return (
		<div>
			<button onClick={getInvestors}>Get All Investors</button>
			<button onClick={getBusinesses}>Get All Businesses</button>
			<button onClick={getInvests}>Get All Invests</button>
			{investors && <InvestorDetail investors={investors} />}
			{businesses && <BusinessDetail businesses={businesses} />}
			{invests && <InvestDetail invests={invests} />}
		</div>
	);
}

export default App;
