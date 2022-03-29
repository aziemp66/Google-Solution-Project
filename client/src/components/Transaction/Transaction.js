function Transaction() { 
    return (
        <section className="flex flex-col gap-12 pb-12 2xl:pb-12 px-40 2xl:px-40 w-full 2xl:w-full h-[100vh] 2xl:h-[100vh] align-middle bg-[#E6EDE9]">
            <div className="flex flex-col w-full 2xl:w-full gap-4">
                <div className="flex justify-start items-start w-full 2xl:w-full mt:40 2xl:mt-40 mb-0 2xl:mb-0">
                    <h1 className="font-bold text-[#008C41] text-xl 2xl:text-3xl" >INVESTMENT TRANSACTION</h1>
                </div>
            </div>
            <div className="flex flex-col w-[90%] bg-white">
                <div className="inline-block w-full px-6 py-2 bg-[#008C41]">
                    <h2 className="font-semibold text-lg 2xl:text-2xl text-white">GIVE FUNDS</h2>
                </div>
                <div className="flex flex-col gap-6 items-start px-8 pt-8 pb-4">
                    <div className="flex w-[55%] flex-row justify-between ">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg 2xl:text-xl">YOUR COMPANY</h3>
                            <p className="font-normal text-sm 2xl:text-base">Tomorrow Company</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg 2xl:text-xl">INVEST TO</h3>
                            <p className="font-normal text-sm 2xl:text-base">Next Year Company</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg 2xl:text-xl">INVESTMENT AMOUNT*</h3>
                        <input type="text" name="amount" id="amount" />
                    </div>
                    <div>
                        <button type="button" className="border-[1px] border-solid rounded-full px-8 py-2 bg-[#008C41] text-white font-semibold">Invest Now</button>
                        <button type="button" className="border-[1px] border-solid rounded-full px-8 py-2 bg-[#008C41] text-white font-semibold">cancel</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Transaction;