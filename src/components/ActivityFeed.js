import React from "react";

function ActivityFeed() {
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "added a new task",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: "Alice Smith",
      action: "completed Task 3",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      user: "Bob Johnson",
      action: "added a comment",
      timestamp: "4 hours ago",
    },
    // Add more dummy activity data as needed
  ];

  return (
    <div>
      <h2>Activity Feed</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>User:</strong> {activity.user}
            <br />
            <strong>Action:</strong> {activity.action}
            <br />
            <strong>Timestamp:</strong> {activity.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
