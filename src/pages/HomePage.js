import React from "react";
import Hero from "../components/hero/hero";
import Newscards from "../components/newsCards/newscards";
import Abouthome from "../components/abouthome/about_home";

function HomePage({ newsData }) {
    return (
        <div>
            <>
                <Hero newsData={newsData} />
            </>
            <>
                <Newscards newsData={newsData} />
            </>

            <>
                <Abouthome />
            </>
        </div>
    );
}

export default HomePage;
