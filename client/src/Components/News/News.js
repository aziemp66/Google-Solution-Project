import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Fade from "react-reveal/Fade";
import { useHistory, Link } from "react-router-dom";

const News = () => {
  const history = useHistory();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getArticle = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=1e837357034340038b05fac941dac8c0"
      );
      setArticle(res.data.articles);
      console.log(res);
    };
    getArticle();
  }, []);

  return (
    // <Fade right>
    <div className="flex flex-col items-center pb-1 p-28 bg-white">
      <button className="text-md font-semibold text-center p-2 bg-black w-32 rounded-xl text-white">
        {" "}
        View More
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 justify-items-center px-20">
        {article.map(({ title, description, urlToImage, url }) => (
          <Link to={() => `${url}`}>
            <div className="py-8 ">
              <div className="overflow-hidden rounded shadow-lg max-w-sm">
                <img
                  src={urlToImage}
                  alt="building"
                  className="w-full h-52 mx-auto"
                />
                <div className="px-6 py-6">
                  <div className="font-bold text-xl poppins">{title}</div>
                  <div className="p-3 poppins font-[250]">{description}</div>
                  <br />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // {/* </Fade> */}
  );
};

export default News;
