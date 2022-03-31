import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [street, setStreet] = useState("");
	const [bio, setBio] = useState("");
	const [postalCode, setPostalCode] = useState("");
	useEffect(() => {
		axios.get(`http://34.101.237.157/api/investor/${id}`).then((res) => {
			const { data } = res;
			setName(data.name);
			setCity(data.address.city);
			setCountry(data.address.country);
			setStreet(data.address.street);
			setBio(data.bio);
			setPostalCode(data.address.postalCode);
		});
	}, [id]);
	return (
		<div className="flex flex-col items-start w-[30%]">
			<div className="inline-block w-full px-4 py-2 bg-[#008C41]">
				<h2 className="font-semibold text-lg 2xl:text-2xl text-white">
					INVESTOR DETAILS
				</h2>
			</div>
			<div className="flex relative flex-col gap-4 w-full">
				<div>
					<img
						className="w-full"
						src="/assets/company.png"
						alt="company"
						srcset=""
					/>
				</div>
				<div className="flex absolute bottom-[-3rem] 2xl:bottom-[-3rem] right-0 left-0 items-center justify-center">
					<img
						src="/assets/companyProfile.png"
						alt="companyProfile"
						srcset=""
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-5 px-16 py-16 bg-white ">
				<div className="text-center">
					<h3 className="font-semibold text-lg 2xl:text-xl">
						{name}
					</h3>
					<p className="font-normal text-lg 2xl:text-lg text-gray-500">
						{`${city}, ${country}`}
					</p>
				</div>
				<div className="flex flex-col text-left">
					<p className="font-normal text-sm 2xl:text-base">
						{street}
					</p>
					<p className="font-normal text-sm 2xl:text-base">
						{bio.substring(0, 50)}
					</p>
					<p className="font-normal text-sm 2xl:text-base">
						Postal Code <span>{postalCode}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Details;
