function InvestorDetails(props) {
	const { businesses } = props;
	return (
		<ul>
			<p>List of all Business</p>
			{businesses.map((business) => (
				<li key={business._id}>
					<p>_id : {business._id}</p>
					<p>{business.name}</p>
					<p>{business.email}</p>
					<p>{business.date}</p>
					<p>{business.mostInvestedField}</p>
					<p>{business.website}</p>
					<p>{business.address.country}</p>
					<p>{business.address.city}</p>
					<p>{business.address.street}</p>
					<p>{business.address.postalCode}</p>
				</li>
			))}
		</ul>
	);
}

export default InvestorDetails;
