import "../styles/filters.css";

function FilterTabs() {
return (

<div className="filters-container">

    <div className="filter-chip active-chip">
        All Posts
    </div>

    <div className="filter-chip">
        Trending
    </div>

    <div className="filter-chip">
        Polls
    </div>

    <div className="filter-chip">
        Images
    </div>

    <div className="filter-chip">
        Tech
    </div>

</div>

);
}

export default FilterTabs;