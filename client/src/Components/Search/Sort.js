function Sort() {
    return (
        <div className="flex flex-col items-start justify-start 2xl:w-[30%] gap-4 ">
           <div className="flex flex-col items-start 2xl:w-full">
               <div className="flex flex-row align-center justify-between w-full bg-white py-3 px-4 z-50 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <h2 className="text-gray-900 font-semibold text-xl 2xl:text-2xl text-left">Fields</h2>
                    <button type="button" className="flex flex-col justify-center">
                        <img src="/searchAsset/arrowDown.png" alt="filterIcon" />
                    </button>
               </div>
               <div className="flex flex-row w-full justify-start px-8 py-8 gap-8 bg-white z-[-1px]">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <input className="transform scale-[1.3]" type="checkbox" id="investor" name="investor" value="investor" />
                        <label className="font-normal text-base 2xl:text-base" for="investor">Investor</label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <input className="transform scale-[1.3]" type="checkbox" id="business" name="business" value="business" />
                        <label className="font-normal text-base 2xl:text-base" for="business">Business</label>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <input className="transform scale-[1.3]" type="checkbox" id="article" name="article" value="article" />
                        <label className="font-normal text-base 2xl:text-base" for="article">Article</label>
                    </div>
               </div>
           </div>
        </div>
    );
}
export default Sort;