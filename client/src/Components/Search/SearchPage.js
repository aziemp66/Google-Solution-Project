import InvestArticle from "./InvestArticle";
import Sort from "./Sort";

function Search() {
    return (
        <section className="inline-block w-full 2xl:w-full align-middle bg-[#E6EDE9] 2xl:mt-28">
            <div className="flex flex-col w-full 2xl:w-full gap-4 ">
                <div className="flex justify-center items-center w-full 2xl:w-full mb-12 2xl:mb-12 bg-white">
                    <div class="my-6 w-[50%] 2xl:w-[35%]">
                        <form class="input-group relative flex flex-row w-full items-center ">
                            <input type="search"
                                class="relative flex-auto min-w-0 block w-full px-6 py-2 text-sm font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-500 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E6EDE9] focus:outline-none"
                                placeholder="Search investor, business, or article ..." />
                            <div className="absolute right-6">
                                <img src="/searchAsset/searchIcon.png" alt="SearchIcon" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-[90%] 2xl:w-[80%] mx-auto">
                    <div className="flex flex-row align-center gap-4">
                        <img src="/searchAsset/filterIcon.png" alt="filterIcon" />
                        <h2 className="text-gray-900 font-medium text-xl 2xl:text-2xl text-left" >Sort by:</h2>
                    </div>
                </div>
                <div className="flex flex-row w-[90%] 2xl:w-[80%] mx-auto gap-4">
                    <Sort></Sort>
                    <InvestArticle></InvestArticle>
                </div>
            </div>
        </section>
    );
}

export default Search;