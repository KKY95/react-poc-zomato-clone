import React, { useState } from "react";
import Header from "../../Components/Common/Header";
import TabOption from "../../Components/Common/tabOptions";
import Footer from "../../Components/Common/Footer";
import Delivery from "../../Components/Delivery";
import DinningOut from "../../Components/DinningOut";
import NightLife from "../../Components/NightLife";

function HomePage() {
    const [activeTab, updateActiveTab] = useState("Delivery");
    return (
        <div>
            <Header />
            <TabOption activeTab={activeTab} updateActiveTab={updateActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DinningOut />
        case "Night Life":
            return <NightLife/>
        default:
            return <Delivery />
    }
}

export default HomePage;