import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function About() {
	const { id } = useParams();
	const [bio, setBio] = useState("");
	const [field, setfield] = useState("");
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");
	useEffect(() => {
		axios.get(`http://34.101.237.157/api/business/${id}`).then((res) => {
			const { data } = res;
			setBio(data.bio);
			setfield(data.field);
			setEmail(data.email);
			setWebsite(data.website);
		});
	}, [id]);
	return (
		<div className="flex flex-col items-start w-[60%]">
			<div className="inline-block w-full px-4 py-2 bg-[#008C41]">
				<h2 className="font-semibold text-lg 2xl:text-2xl text-white">
					ABOUT BUSINESS
				</h2>
			</div>
			<div>
				<div className="flex flex-col items-start w-full pt-8 px-10 bg-white ">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row items-center justify-between">
							<h3 className="font-bold text-lg 2xl:text-xl">
								ABOUT US
							</h3>
						</div>
						<div className="flex flex-col pl-6 w-[80%] gap-8">
							<div>
								<p className="font-normal text-sm 2xl:text-base">
									{bio ? bio : "No bio"}
								</p>
							</div>
							<div className="flex flex-row items-center gap-4">
								<div>
									<img src="./assets/icon/money.png" alt="" />
								</div>
								<div>
									<p className="font-medium text-base 2xl:text-lg">
										Investment funds received:{" "}
										<span className="text-[#008C41]">
											{parseInt(Math.random() * 100)}
										</span>{" "}
										USD
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start w-full pt-14 px-10 bg-white ">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row items-center justify-start">
							<h3 className="font-bold text-lg 2xl:text-xl">
								Field of Speciality
							</h3>
						</div>
						<div className="flex flex-col pl-6 w-full gap-8">
							<div className="flex flex-row items-end gap-4">
								<div>
									<img src="./assets/icon/home.png" alt="" />
								</div>
								<div className="inline-block items-center justify-center">
									<button
										type="button"
										className="mx-auto font-medium text-center 2xl:text-base border-solid rounded-2xl border-[1px] w-[8rem] 2xl:w-[8rem] px-4 py-1 bg-[#E6EDE9]"
									>
										{field ? field : "No field"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start w-full pt-8 pb-[4.54em] px-10 bg-white ">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row items-center justify-start">
							<h3 className="font-bold text-lg 2xl:text-xl">
								CONTACT
							</h3>
						</div>
						<div className="flex flex-col pl-6 w-full gap-8">
							<div className="flex flex-row items-center gap-4">
								<div>
									<img src="./assets/icon/email.png" alt="" />
								</div>
								<div>
									<a
										href="#"
										className="font-medium text-base 2xl:text-lg text-[#008C41]"
									>
										{email}
									</a>
								</div>
							</div>
							<div className="flex flex-row items-center gap-5">
								<div>
									<img src="./assets/icon/web.png" alt="" />
								</div>
								<div>
									<a
										href="#"
										className="font-medium text-base 2xl:text-lg text-[#008C41]"
									>
										{website ? website : "No website"}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
