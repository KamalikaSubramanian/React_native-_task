import React from 'react'
import "./card.css"
import ProteinCard from "../Card/ProteinCard.jsx"
import SugarCard from "../Card/SugarCard.jsx";
import FlavoursCard from "../Card/FlavoursCard.jsx";

function Card() {

    return (
        <div>
            <ProteinCard />
            <SugarCard />
            <FlavoursCard />

        </div>
    )
}

export default Card
