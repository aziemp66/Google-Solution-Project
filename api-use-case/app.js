const getAllInvestor = fetch("http://localhost:5000/investor").then(
	(response) => console.log(response.json())
);
