function InvestDetail(props) {
	const { invests } = props;
	return (
		<ul>
			<p>List of all Invest</p>
			{invests.map((invest) => (
				<li key={invest._id}>
					<p>_id : {invest._id}</p>
					<p>Investor : {invest.investor.name}</p>
					<p>Business : {invest.business.name}</p>
					<p>{invest.date}</p>
					<p>Amount : {invest.amount}</p>
					<p>{invest.field}</p>
				</li>
			))}
		</ul>
	);
}

export default InvestDetail;
