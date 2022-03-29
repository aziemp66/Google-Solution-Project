import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
import ArticleMenu from "./ArticleMenu";
import Title from "../Title";

const ArticleCard = () => {
  const [data] = useFetch("article");

  // const [animate, setAnimate] = useState(true);
  // setTimeout(() => {
  //   setAnimate(false);
  // }, 500);

  return (
    <section className="max-w-screen-xl mx-auto mt-24 px-1">
      <div className="align-text-top text-left text-[#FF000F] text-2xl poppins p-auto font-extrabold mb-24 py-10">
        {" "}
        Trending Topic
        <Title title="Article" />
        {data.map((article) => (
          <button
            className="max-w-screen-xl p-2 transition duration-700 ease-in-out transform hover:shadow-xl hover:scale-105 rounded-xl"
            key={article.id}
          >
            <Fade right>
              <ArticleMenu {...article} />
            </Fade>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
