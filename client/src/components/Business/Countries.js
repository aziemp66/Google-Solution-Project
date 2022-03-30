function Countries() {
    return (
        <div className="flex flex-col items-start 2xl:w-full">
            <div className="flex flex-row align-center justify-between w-full bg-white py-3 px-4 z-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h2 className="text-gray-900 font-semibold text-xl 2xl:text-2xl text-left">Countries </h2>
                <button type="button" className="flex flex-col justify-center">
                    <img src="/searchAsset/arrowDown.png" alt="filterIcon" />
                </button>
            </div>
            <div className="flex flex-col w-full pb-5 pr-8 pl-6 gap-5 bg-white z-[-1px]">
                <div class="my-2 pt-5 w-[50%] 2xl:w-[94%]">
                    <form class="input-group gap-3 relative flex flex-row w-full items-center ">
                        <input type="search"
                            class="relative flex-auto min-w-0 block w-full px-4 py-2 text-sm font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-500 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E6EDE9] focus:outline-none"
                            placeholder="Search country name ..." />
                        <div>
                            <button type="button" className="border-2 px-4 py-1 rounded-lg  border-transparent bg-black font-medium text-white">Search</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-row w-full justify-start items-center gap-10">
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="Austria" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Austria</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Belgia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Finlandia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Perancis</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Italia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Jepang</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Hongkong</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Makau</label>
                        </div>
                    </div>
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Korea Selatan</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Singapura</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Australia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Selandia Baru</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Italia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Kanada</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">United States</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Puerto Rico</label>
                        </div>
                    </div>
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Denmark</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Ceko</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Estonia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Jerman</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Estonia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="article" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Inggris</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="investor" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Irlandia</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="country" name="country" value="business" />
                            <label className="font-normal text-base 2xl:text-base" for="country">Latvia</label>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Countries;