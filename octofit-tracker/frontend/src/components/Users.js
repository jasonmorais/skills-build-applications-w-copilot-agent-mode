import React, { useEffect, useState } from 'react';

const USERS_API = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/users/';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-warning">Users</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? users.map((user, i) => (
                  <tr key={i}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                )) : (
                  <tr><td colSpan="2" className="text-center">No users found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
