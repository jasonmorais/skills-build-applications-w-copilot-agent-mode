// Copilot agent mode
// API endpoint: /api/activity/
import React, { useEffect, useState } from 'react';

const ACTIVITIES_API = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities/';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(ACTIVITIES_API)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Activities</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Type</th>
                  <th>Duration (min)</th>
                  <th>Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {activities.length > 0 ? activities.map((a, i) => (
                  <tr key={i}>
                    <td>{a.activity_type}</td>
                    <td>{a.duration}</td>
                    <td>{a.date}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => { setSelected(a); setShowModal(true); }}>View</button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="4" className="text-center">No activities found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for activity details */}
      {showModal && selected && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Activity Details</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Type:</strong> {selected.activity_type}</p>
                <p><strong>Duration:</strong> {selected.duration} min</p>
                <p><strong>Date:</strong> {selected.date}</p>
                {/* Add more details if available */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
