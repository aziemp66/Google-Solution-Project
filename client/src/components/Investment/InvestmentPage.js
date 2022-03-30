import SortInvestment from "./SortInvestment";
import ListInvestment from "./ListInvestment";

function InvestmentPage() {
    return (
        <section className="inline-block pb-12 2xl:pb-12 w-full 2xl:w-full 2xl:h-auto align-middle bg-[#E6EDE9]">
            <div className="flex flex-col w-full 2xl:w-full gap-4 ">
                <div className="flex justify-center items-center w-full 2xl:w-full mt-40 mb-6">
                    <div className="flex flex-col align-center items-center text-center gap-3" >
                        <img src="/investorAsset/deal.png" alt="dealIcon" />
                        <h1 className="font-bold text-black text-xl 2xl:text-3xl" >INVESTMENT</h1>
                    </div>
                </div>
                <div className="flex flex-col w-[90%] 2xl:w-[80%] mx-auto">
                    <div className="flex flex-row align-center gap-4">
                        <img src="/searchAsset/filterIcon.png" alt="filterIcon" />
                        <h2 className="text-gray-900 font-medium text-xl 2xl:text-2xl text-left" >Sort by:</h2>
                    </div>
                </div>
                <div className="flex flex-row w-[90%] 2xl:w-[80%] mx-auto gap-4">
                    <SortInvestment></SortInvestment>
                    <ListInvestment></ListInvestment>
                </div>
            </div>
        </section>
    );
}

export default InvestmentPage;