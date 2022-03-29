import React from "react";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
import Title from "../Title";
import Menu from "./Menu";

const Card = (props) => {
  // const icon = [
  //     { id: 1, src: '../../assets/icon/investor.png' },
  //     { id: 2, src: '../../assets/icon/investment.png' },
  //     { id: 3, src: '../../assets/icon/article.png' },
  // ]

  // const { icon, title, desc } = props;
  const [data] = useFetch("dummy");

  return (
    <section className="max-w-screen-lg px-6 py-6 pb-24 mx-auto">
      <Title title="Product" />
      {data.map((dummy) => (
        <button
          className="max-w-screen-xl py-8 pt-20 pb-24 pl-10 mx-auto px-13 w-80 h-60"
          key={dummy.id}
        >
          <Fade top>
            <Menu {...dummy} />
          </Fade>
        </button>
      ))}
    </section>
  );
};

export default Card;
