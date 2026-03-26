import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

import "./Dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredUsers = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="dashboard">
        <h2 className="title">User Dashboard</h2>

        <div className="top">
            <SearchBar search={search} setSearch={setSearch} />

            <button
            className="sort-btn"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
            Sort ({sortOrder})
            </button>
  </div>

  <UserTable users={filteredUsers} />
</div>
  );
}

export default Dashboard;