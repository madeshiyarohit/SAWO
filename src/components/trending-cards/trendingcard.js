import React from "react";
export default function TrendingCard() {
    return (
        <div className="trending-block-items">
            <div className="trending-block-items-content flex items-center flex-col text-center">
            <img className="rounded-xl" src="https://picsum.photos/342/220" alt="icon"/>
            <p className="text-2xl font-bold mt-8 mb-10 trendingText">This is number one heading about the topic</p>
            </div>
        </div>
    )
}