import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="https://picsum.photos/410/290" className="cardImage" alt="" />
      <span className="cardCategory">CATEGORY</span>
      <h3 className="cardHeadline">
        This is number one heading about the topic
      </h3>
      <div className="absolute right-5 bottom-3 flex items-center flex-row-reverse">
        <img
          src="https://picsum.photos/45/45"
          className="rounded-full"
          alt=""
        />
        <p className="cardAuthorName">Name</p>
      </div>
    </div>
  );
}
