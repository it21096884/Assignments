import React from "react";

const TaskItem = ({ task, markAsDone }) => {
  const isInProgress = task.status === "In Progress";

  // Define a function to get the bell icon class based on priority
  const getBellIconClass = (priority) => {
    switch (priority) {
      case "High":
        return "text-danger"; // Red for high priority
      case "Medium":
        return "text-warning"; // Yellow for medium priority
      case "Low":
        return "text-primary"; // Blue for low priority
      default:
        return ""; // Default black
    }
  };

  return (
    <div>
      <strong>Title:</strong> {task.title}
      <br />
      <strong>Priority:</strong> {task.priority}
      <br />
      <strong>Status:</strong> {task.status}
      <i className={`fas fa-bell ${getBellIconClass(task.priority)}`} />{" "}
      {/* Bell icon with color */}
      {isInProgress && (
        <button onClick={() => markAsDone(task.id)}>Mark as Done</button>
      )}
    </div>
  );
};

export default TaskItem;
