import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./article-content";
import Articles from "./Article";

const ArticleDetail = ({ match }) => {
  
  const { id } = useParams();
  const { name } = useParams();
  const article = articlesContent.find((article) => article.name === name);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
    };
    fetchData();
  }, [name]);

  if (!article)
    return (
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        Article not exists
      </h1>
    );
  const OtherArticles = articlesContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-12 mb-3 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {" "}
          {paragraph}
        </p>
      ))}

      <h1 className="sm:text-2xl text-xl font-bold mt-4 mb-4 text-gray-900 ">
        {" "}
        Related Topic
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={OtherArticles}></Articles>
      </div>
    </>
  );
};

export default ArticleDetail;
