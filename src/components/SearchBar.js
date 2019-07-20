import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
    location: "",
    sortBy: "best_match"
  };

  sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  getSortByClass = sortByOption => {
    // console.log(sortByOption);
    return this.state.sortBy === sortByOption ? "active" : "";
  };

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange = evt => {
    this.setState({ term: evt.target.value });
  };

  handleLocationChange = evt => {
    this.setState({ location: evt.target.value });
  };

  handleSearch = evt => {
    const { term, location, sortBy } = this.state;
    this.props.searchYelp(term, location, sortBy);
    evt.preventDefault();
  };

  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses"
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button className="btn btn-background" onClick={this.handleSearch}>
            Let's Go
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
