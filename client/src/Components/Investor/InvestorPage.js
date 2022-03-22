import SortInvestor from "./SortInvestor";
function InvestorPage() { 
    return (
        <section className="inline-block w-full 2xl:w-full pb-12 2xl:h-auto align-middle bg-[#E6EDE9]">
            <div className="flex flex-col w-full 2xl:w-full gap-4 ">
                <div className="flex justify-center items-center w-full 2xl:w-full mt-12 mb-12 2xl:mb-12">
                    <div className="flex flex-col align-center items-center text-center gap-3" >
                        <img src="/investorAsset/deal.png" alt="dealIcon" />
                        <h1 className="font-bold text-black text-xl 2xl:text-3xl" >INVESTOR</h1>
                    </div>
                </div>
                <div className="flex flex-col w-[90%] 2xl:w-[80%] mx-auto">
                    <div className="flex flex-row align-center gap-4">
                        <img src="/searchAsset/filterIcon.png" alt="filterIcon" />
                        <h2 className="text-gray-900 font-medium text-xl 2xl:text-2xl text-left" >Sort by:</h2>
                    </div>
                </div>
                <div className="flex flex-row w-[90%] 2xl:w-[80%] mx-auto gap-4">
                    <SortInvestor></SortInvestor>
                    
                </div>
            </div>
        </section>
    );
}

export default InvestorPage;