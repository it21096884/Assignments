import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setTasks(response.data.tasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const markAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: "Completed" };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} markAsDone={markAsDone} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
