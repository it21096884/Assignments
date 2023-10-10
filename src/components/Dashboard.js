import React from "react";
import TaskList from "./TaskList";
import ActivityFeed from "./ActivityFeed";

function Dashboard() {
  const getTask = () => {
    <div className="activity-feed">
      <ActivityFeed />
    </div>;
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome Back John Dae</h2>
      <button onClick={getTask}>Looking for more information</button>
      <div className="dashboard-content">
        <div className="task-list">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
