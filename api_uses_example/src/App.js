import "./App.css";
import axios from "axios";
import { useState } from "react";
import InvestorDetail from "./components/InvestorDetail";

function App() {
	const [investors, setInvestors] = useState(null);
	const getInvestors = async () => {
		if (investors) {
			setInvestors(null);
			return;
		}
		//get joke form offcial-joke-api
		const response = await axios.get("http://localhost:5000/investor/");
		setInvestors(response.data);
	};
	return (
		<div>
			<button onClick={getInvestors}>Get All Investors</button>
			{investors && <InvestorDetail investors={investors} />}
		</div>
	);
}

export default App;
