import React, { useState } from "react";

const ArticleMenu = (props) => {
  const { image, desc } = props;

  return (
    <div className="flex px-1 py-24 mx-auto">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden md-lg">
        <img className="w-72" src={image} alt="article" />
        <div className="p-2 bg-black text-white">
          <p className="w-60 px-4 py-2 text-left poppins leading-relaxed mb-3 text-sm">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleMenu;
