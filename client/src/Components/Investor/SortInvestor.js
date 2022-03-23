import Fields from "./Fields";
import Countries from "./Countries";


function SortInvestor() { 
    return (
        <div className="flex flex-col items-start justify-start 2xl:w-[30%] ">
            <Countries></Countries>
            <Fields></Fields>
        </div>
        
    );
}

export default SortInvestor;