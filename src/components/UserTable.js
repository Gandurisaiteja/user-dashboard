import React from "react";
import { useNavigate } from "react-router-dom";

function UserTable({ users }) {
  const navigate = useNavigate();

  return (
    <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            style={{ cursor: "pointer" }}
          >
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;