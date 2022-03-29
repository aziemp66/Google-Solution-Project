function Transaction() { 
    return (
        <section className="flex flex-col gap-12 pb-12 2xl:pb-12 px-40 2xl:px-40 w-full mx-auto 2xl:w-full h-[100vh] 2xl:h-[100vh] bg-[#E6EDE9]">
            <div className="flex flex-col w-full 2xl:w-full gap-4">
                <div className="flex justify-start items-start w-full 2xl:w-full mt:40 2xl:mt-40 mb-0 2xl:mb-0">
                    <h1 className="font-bold text-[#008C41] text-xl 2xl:text-3xl" >INVESTMENT TRANSACTION</h1>
                </div>
            </div>
            <div className="flex flex-col w-[90%] bg-white">
                <div className="inline-block w-full px-6 py-2 bg-[#008C41]">
                    <h2 className="font-semibold text-lg 2xl:text-2xl text-white">GIVE FUNDS</h2>
                </div>
                <div className="flex w-full flex-col gap-8 items-start px-12 py-16">
                    <div className="flex w-[65%] flex-row justify-between ">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg 2xl:text-xl">YOUR COMPANY</h3>
                            <p className="font-semibold text-sm 2xl:text-lg text-[#008C41]">Tomorrow Company</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg 2xl:text-xl">INVEST TO</h3>
                            <p className="font-semibold text-sm 2xl:text-lg text-[#008C41]">Next Year Company</p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4">
                        <h3 className="font-bold text-lg 2xl:text-xl">INVESTMENT AMOUNT<span className="text-red-500">*</span></h3>
                        <input type="text" class="w-[30%] px-6 py-2 text-sm font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-500 rounded-lg transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none"/>
                    </div>
                    <div className="flex w-[100%] pt-6 flex-row gap-12 item-center justify-center">
                        <button type="button" className="border-[1px] border-solid rounded-full px-12 py-2 bg-[#008C41] text-white font-semibold">Invest Now</button>
                        <button type="button" className="border-[1px] border-solid border-[#008C41] rounded-full px-16 py-2 bg-[#ffffff] text-black font-semibold">Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Transaction;