import React from "react";

export default function Card() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl p-7 bg-white relative m-7">
      <img
        src="https://picsum.photos/410/290"
        className="rounded-lg mb-8 mr-0"
        alt=""
      />
      <span className="category text-base">CATEGORY</span>
      <h3 className="pt-3 pb-10 text-3xl">
        This is number one heading about the topic
      </h3>
      <div className="author absolute right-5 bottom-3 flex items-center flex-row-reverse">
        <img
          src="https://picsum.photos/45/45"
          className="rounded-full"
          alt=""
        />
        <p className="mr-2">Name</p>
      </div>
    </div>
  );
}
