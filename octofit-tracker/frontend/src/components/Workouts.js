import React, { useEffect, useState } from 'react';

const WORKOUTS_API = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/workouts/';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(() => setWorkouts([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-danger">Workouts</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {workouts.length > 0 ? workouts.map((w, i) => (
                  <tr key={i}>
                    <td>{w.workout_type}</td>
                    <td>{JSON.stringify(w.details)}</td>
                    <td>{w.date}</td>
                  </tr>
                )) : (
                  <tr><td colSpan="3" className="text-center">No workouts found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
