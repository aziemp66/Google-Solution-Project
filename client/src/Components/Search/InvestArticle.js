import Investor from "./Investor";
import Investment from "./Investment";

function InvestArticle() { 
    return (
        <div className="flex flex-col items-start justify-start 2xl:w-[70%]">
            <Investor />
            <Investment />
            <h1>Article</h1>
        </div>
    );
}

export default InvestArticle;