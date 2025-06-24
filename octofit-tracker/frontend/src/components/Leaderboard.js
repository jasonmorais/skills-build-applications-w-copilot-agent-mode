import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/leaderboard/';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(() => setLeaderboard([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-success">Leaderboard</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Team</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.length > 0 ? leaderboard.map((entry, i) => (
                  <tr key={i}>
                    <td>{entry.team_id}</td>
                    <td>{entry.points}</td>
                  </tr>
                )) : (
                  <tr><td colSpan="2" className="text-center">No leaderboard data found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
