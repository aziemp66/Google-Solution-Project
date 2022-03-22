import Investor from "./Investor";
import Investment from "./Investment";
import Article from "./Article";

function InvestArticle() { 
    return (
        <div className="flex flex-col items-start justify-start 2xl:w-[70%]">
            <Investor />
            <Investment />
            <Article />
        </div>
    );
}

export default InvestArticle;