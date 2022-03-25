import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
	const [investor, setInvestors] = useState(null);
	const getInvestors = async () => {
		//get joke form offcial-joke-api
		const response = await axios.get("http://localhost:5000/investor/");
		setInvestors(response.data);
	};
	return (
		<div>
			<button onClick={getInvestors}>Get All Investors</button>
			{investor && (
				<ul>
					{investor.map((investor) => (
						<li key={investor._id}>
							<p>{investor.name}</p>
							<p>{investor.email}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
