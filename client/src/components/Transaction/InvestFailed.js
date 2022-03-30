import ButtonBackProfile from "./ButtonBackProfile";

function InvestFailed() {
    return (
        <section className="flex flex-col items-center gap-12 pb-12 2xl:pb-12 px-40 2xl:px-40 w-full mx-auto 2xl:w-full h-[100vh] 2xl:h-[100vh] bg-[#E6EDE9]">
            <div className="flex flex-col w-[80%] bg-white mt-40 2xl:mt-40 mb-0 2xl:mb-0">
                <div className="flex items-center justify-center flex-col w-full bg-white">
                    <div className="flex flex-col items-center justify-center w-full px-6 py-2 bg-[#008C41]">
                        <h2 className="font-bold text-lg 2xl:text-2xl text-white">INVEST STATUS</h2>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-8 px-12 py-12">
                        <h2 className="font-bold text-lg 2xl:text-2xl text-[#FF0D0D]">INVESTMENT FAILED</h2>
                    </div>
                </div>
            </div>
            <ButtonBackProfile></ButtonBackProfile>
        </section>
    );
}

export default InvestFailed;