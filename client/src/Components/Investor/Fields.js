function Fields() { 
    return (
        <div className="flex flex-col items-start w-[97%] 2xl:w-full">
            <div className="flex flex-row align-center justify-between w-full border-solid border-[1px] bg-white py-3 px-4 z-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h2 className="text-gray-900 font-semibold text-xl 2xl:text-2xl text-left">Fields</h2>
                <button type="button" className="flex flex-col justify-center">
                    <img src="/searchAsset/arrowDown.png" alt="filterIcon" />
                </button>
            </div>
            <div className="flex flex-col w-full pb-5 pr-8 pl-6 gap-5 bg-white z-[-1px]">
                <div></div>
                <div className="flex flex-row w-full justify-start items-center gap-10">
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="Technology" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Technology</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="business" name="fields" value="Tourism" />
                            <label className="font-normal text-base 2xl:text-base" for="business">Tourism</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="article" name="fields" value="Finance" />
                            <label className="font-normal text-base 2xl:text-base" for="article">Finance</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="Energy" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Energy</label>
                        </div>
                    </div>
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="RealEstate" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Real Estate</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="business" name="fields" value="Food" />
                            <label className="font-normal text-base 2xl:text-base" for="business">Food</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="article" name="fields" value="Logistic" />
                            <label className="font-normal text-base 2xl:text-base" for="article">Logistic</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="Infrastucture" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Infrastucture</label>
                        </div>
                    </div>
                    <div className="flex flex-col w-[auto] justify-start items-start gap-4">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="Vehicles" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Vehicles</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="business" name="fields" value="Education" />
                            <label className="font-normal text-base 2xl:text-base" for="business">Education</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="article" name="fields" value="Agriculture" />
                            <label className="font-normal text-base 2xl:text-base" for="article">Agriculture</label>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <input className="transform scale-[1.3]" type="checkbox" id="investor" name="fields" value="Fashion" />
                            <label className="font-normal text-base 2xl:text-base" for="investor">Fashion</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fields;