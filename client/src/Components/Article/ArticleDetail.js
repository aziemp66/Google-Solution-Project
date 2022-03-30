import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./article-content";
import ArticleCard from "./ArticleCard";
import Articles from "./Articles";

const ArticleDetail = ({ match }) => {
  const { id } = useParams();
  const { name } = useParams();
  const article = articlesContent.find((article) => article.name === name);

  const [setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article)
    return (
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-black poppins">
        Article not found
      </h1>
    );
  const OtherArticles = articlesContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-12 mb-3 text-black poppins">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {" "}
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-md font-bold mt-4 mb-4 text-gray-900 poppins">
        {" "}
        Related Topic
      </h1>
      <ArticleCard />
      <div className="flex flex-wrap -m-4">
        <Articles articles={OtherArticles}></Articles>
      </div>
    </>
  );
};

export default ArticleDetail;
