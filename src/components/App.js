import React from "react";
import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];

const searchYelp = (term, location, sortBy) => {
  console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
};

const App = () => {
  return (
    <div className="App">
      <h1>I'm Hungry</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
