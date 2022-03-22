function Investor() { 
    return (
       <div className="flex flex-col 2xl:w-full gap-8 2xl:gap-8 pt-4 2xl:pt-4 mb-12 2xl:mb-12 mx-auto bg-white">
            <div className="inline-block px-12">
                <h2 className="text-[#008C41] font-semibold text-xl 2xl:text-2xl text-left" >INVESTOR</h2>
            </div>
            <div className="Investor-list flex flex-col gap-4 2xl:gap-12 text-gray-900">
                <div className="flex flex-row items-center 2xl:gap-6 border-b-2 pb-6">
                    <div className="inline-block 2xl:pl-16">
                        <img src="/searchAsset/companyProfile.png" alt="CompanyProfile" srcset="" />
                    </div>
                    <div className="flex flex-col w-[50%] items-start gap-2">
                        <div>
                            <h3 className="font-bold text-xl 2xl:text-2xl ">Today Company</h3>
                            <h5 className="font-normal text-lg 2xl:text-xl text-[#585858]">Wina, Austria</h5>
                        </div>
                        <div>
                            <p className="font-normal 2xl:text-lg">Invest in <span className="font-medium text-[#008C41]">500</span> local businesses  </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 pt-2">
                            <p className="font-semibold 2xl:text-lg">Investing mostly in:</p>
                            <a className="font-medium text-center 2xl:text-sm border-solid rounded-2xl border-[1px] 2xl:w-[7rem] px-4 py-1 bg-[#E6EDE9]" href="#">Technology</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center border-b-2 pb-6 2xl:gap-6">
                    <div className="inline-block 2xl:pl-16 ">
                        <img src="/searchAsset/companyProfile.png" alt="CompanyProfile" srcset="" />
                    </div>
                    <div className="flex flex-col w-[50%] items-start gap-2">
                        <div>
                            <h3 className="font-bold text-xl 2xl:text-2xl ">Tomorrow Company</h3>
                            <h5 className="font-normal text-lg 2xl:text-xl text-[#585858]">Roma, Italia</h5>
                        </div>
                        <div>
                            <p className="font-normal 2xl:text-lg">Invest in <span className="font-medium text-[#008C41]"> 480 </span> local businesses </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 pt-2">
                            <p className="font-semibold 2xl:text-lg">Investing mostly in:</p>
                            <a className="font-medium text-center 2xl:text-sm border-solid rounded-2xl border-[1px] 2xl:w-[7rem] px-4 py-1 bg-[#E6EDE9]"
                                href="#">Food</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full pb-8">
                <div className="flex flex-row items-center justify-center text-center 2xl:gap-8 mx-auto">
                    <a className="font-bold text-base text-[#008C41]" href="#">1</a>
                    <a className="font-bold text-base" href="#">2</a>
                    <a className="font-bold text-base" href="#">3</a>
                    <a className="font-bold text-base" href="#">4</a>
                    <a className="font-bold text-base" href="#">5</a>
                    <a className="font-medium text-base 2xl:text-base text-white border-solid rounded-2xl border-[1px] 2xl:w-[6rem] px-4 py-1 bg-[#008C41]"
                        href="#">Next</a>
                </div>
            </div>
       </div>
    );
}

export default Investor;