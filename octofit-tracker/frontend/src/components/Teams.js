import React, { useEffect, useState } from 'react';

const TEAMS_API = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/teams/';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(() => setTeams([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-info">Teams</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                {teams.length > 0 ? teams.map((team, i) => (
                  <tr key={i}>
                    <td>{team.name}</td>
                    <td>{team.members && team.members.join(', ')}</td>
                  </tr>
                )) : (
                  <tr><td colSpan="2" className="text-center">No teams found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
