import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const found = data.find((u) => u.id === parseInt(id));
      setUser(found);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div >
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company?.name}</p>
      <p><b>City:</b> {user.address?.city}</p>
    </div>
  );
}

export default UserDetail;