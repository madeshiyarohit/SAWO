import React from "react";
import QuickReadsCards from "../../../../components/quickRead Cards/quickreadcards";
import TrendingCard from "../../../../components/trending-cards/trendingcard";
export default function QuickReads() {
    return(
        <section className="quickReads">
            <div className="quickReads-main-bg p-10">
                <div className="quickReads-header">
                    <h3 className="text-5xl mb-9 cardReadHeadline">Quick Reads</h3>
                </div>
                <div className="quickreadcards-main-block flex">
                    <div className="quickreadcards-left-block pr-14 w-9/12">
                    <QuickReadsCards/>
                    <QuickReadsCards/>
                    <QuickReadsCards/>
                    </div>
                    <div className="quickreadcards-right-block w-3/12 rounded-xl">
                        <div className="trending-main-block p-6 shadow-xl rounded-xl">
                            <div className="trending-header">
                                <h2 className="text-3xl font-bold mb-11 mt-4 trendingHeading">Trending this week</h2>
                            </div>
                            <TrendingCard/>
                            <TrendingCard/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}