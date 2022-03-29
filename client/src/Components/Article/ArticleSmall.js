import React from "react";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
// import Title from "../Title";

const ArticleSmall = () => {
  const [data] = useFetch("articlesmall");

  return (
    <Fade right>
      <div className="flex-wrap flex w-screen h-auto py-1 p-80 mt-[-200px]">
        {/* <Title title="News" /> */}
        {data.map((articlesmall) => (
          <button
            className="flex-wrap flex py-3 p-2 border-t-2 border-gray-300"
            key={articlesmall.id}
          >
            <div className="flex pb-2">
              <a className="flex-shrink-0" href="#">
                <img
                  className="h-36 w-56 object-cover object-right"
                  src={articlesmall.thumbnail}
                  alt="articles"
                />
              </a>
              <a href="#">
                <h6
                  className="ml-3 text-2xl font-bold leading-tight tracking-tight hover:underline p-4 pt-4 text-left"
                  style={{ textDecorationColor: "black" }}
                >
                  {articlesmall.title}
                </h6>
              </a>
            </div>
            <div className="flex absolute w-[282px] h-[36px] left-[580px] space-x-1 py-20 mt-6 ">
              <h6 className="font-normal text-blue-600 poppins">
                {articlesmall.category}
              </h6>
              <h6 className="font-light text-black poppins">
                {articlesmall.date}
              </h6>
            </div>
          </button>
        ))}
      </div>
    </Fade>
  );
};

export default ArticleSmall;
