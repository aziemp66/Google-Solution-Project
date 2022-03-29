import React from "react";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import ArticleMenu from "../components/Article/ArticleCard";
import ArticleSmall from "../components/Article/ArticleSmall";
import News from "../components/News/News";

const Home = () => {
  return (
    <main className="w-full bg-[#E6EDE9]">
      <Section />
      <Card />
      <ArticleMenu />
      <ArticleSmall />
      <News />
    </main>
  );
};

export default Home;
