import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "10px", marginBottom: "10px" }}
    />
  );
}

export default SearchBar;