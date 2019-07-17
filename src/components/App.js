import React from "react";
import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
