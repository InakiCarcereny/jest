import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>Error: {error}</p>}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
