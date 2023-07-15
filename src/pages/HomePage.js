import React from "react";
import Hero from "../components/hero/hero";
import Newscards from "../components/newsCards/newscards";
import Sponsers from "../components/sponsers/sponsers";
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
                <Sponsers />
            </>
            <>
                <Abouthome />
            </>
        </div>
    );
}

export default HomePage;