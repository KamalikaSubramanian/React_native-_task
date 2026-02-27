import React from 'react'
import "../SortFilter/SortFilter.css";
import filterUpArrow from "../SortFilter/assets/filterUpArrow.jpg";
import filterDownArrow from "../SortFilter/assets/filterDownArrow.jpg";
function SortFilter() {
    return (
        <div className="sort-filter">
            <div className="header">
                <h3>Sort & Filter</h3>
                <span className="arrow"><img src={filterUpArrow} className="arrow"/></span>
            </div>

            <div className="controls">
                <div className="box">
                    <div className="label">Sort by</div>
                    <div className="value">
                        Most recent
                        <span className="chevron"><img src={filterDownArrow} className="arrow"/></span>
                    </div>
                </div>

                <div className="box">
                    <div className="label">Rating</div>
                    <div className="value">
                        All
                        <span className="chevron"><img src={filterDownArrow} className="arrow"/></span>
                    </div>
                </div>
            </div>

            <div className="media">
                <div className="checkbox"></div>
                <span>With media</span>
            </div>
        </div>
    )
}

export default SortFilter