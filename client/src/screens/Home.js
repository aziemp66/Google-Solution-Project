import React from "react";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Article from "../components/Article/Article";

const Home = () => {
    return (
        <main className="w-full bg-[#E6EDE9]">
            <Section/>
            <Card/>
            <Article/>
        </main>
    );
}

export default Home;
