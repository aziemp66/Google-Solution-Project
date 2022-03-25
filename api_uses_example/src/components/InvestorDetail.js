function InvestorDetails(props) {
	const { investors } = props;
	return (
		<ul>
			{investors.map((investor) => (
				<li key={investor._id}>
					<p>{investor.name}</p>
					<p>{investor.email}</p>
					<p>{investor.email}</p>
					<p>{investor.date}</p>
					<p>{investor.mostInvestedField}</p>
					<p>{investor.website}</p>
					<p>{investor.address.country}</p>
					<p>{investor.address.city}</p>
					<p>{investor.address.street}</p>
					<p>{investor.address.postalCode}</p>
				</li>
			))}
		</ul>
	);
}

export default InvestorDetails;
