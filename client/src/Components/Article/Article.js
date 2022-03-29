import React from "react";
import { Link } from "react-router-dom";

const Article = ({ articles }) => {
  // const history = useHistory();

  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/4 mt-10">
          <div className="h-full border-2 border-gray-200 border-opacity-80 rounded-2xl  overflow-hidden shadow-lg hover:bg-grey-100  hover:animate-pulse">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div>
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className="title-font text-lg font-bold text-center text-gray-900 mb-3 mt-10 poppins">
                  {" "}
                  {article.title}
                </h3>
              </Link>
              <Link key={index} to={`/article/${article.name}`}>
                <p className="leading-relaxed mb-3 px-4 mt-10">
                  {article.content[0].substring(0, 105)}...
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
