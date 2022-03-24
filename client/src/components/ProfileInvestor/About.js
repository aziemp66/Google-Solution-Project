function About() { 
    return (
        <div className="flex flex-col items-start w-[60%]">
            <div className="inline-block w-full px-4 py-2 bg-[#008C41]">
                <h2 className="font-semibold text-lg 2xl:text-2xl text-white">ABOUT INVESTOR</h2>
            </div>
           <div className="flex flex-col items-start w-full py-8 px-10 bg-white ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="font-bold text-lg 2xl:text-xl">ABOUT US</h3>
                        <button type="button" className="font-semibold border-b-[2px] rounded-sm border-[#008C41] text-[#008C41] text-lg 2xl:text-lg ">Edit Profile</button>
                    </div>
                    <div className="flex flex-col pl-6 w-[80%] gap-8">
                        <div>
                            <p className="font-normal text-sm 2xl:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aenean integer ultrices diam sed aliquam morbi sit.
                                Maecenas nullam duis non arcu, morbi. Scelerisque id purus quis viverra faucibus. Rhoncus eu blandit consequat, vitae
                                libero, blandit tellus.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div>
                                <img src="./assets/icon/building.png" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-base 2xl:text-lg">Invest in <span className="text-[#008C41]">500</span> local businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default About;