import { Button } from "@mui/material";
import React from "react";
import showToastBar from "./toastBar";

function AddTask({
  task,
  priority,
  deadline,
  setTask,
  setPriority,
  setDeadline,
  setTasks,
  tasks,
}) {
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      showToastBar({
        message: "Please enter a task and select a valid deadline.",
        severity: "error",
      });
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    const selectedDateOnly = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    const currentDateOnly = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    if (selectedDateOnly < currentDateOnly) {
      showToastBar({
        message: "Please select a future date for the deadline.",
        severity: "error",
      });
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      task,
      priority,
      deadline,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setPriority("top");
    setDeadline("");
  };

  return (
    <div className="task-form">
      <input
        type="text"
        id="task"
        placeholder="Enter task..."
        value={task}
        minLength={200}
        onChange={handleTaskChange}
      />
      <select id="priority" value={priority} onChange={handlePriorityChange}>
        <option value="top">Top Priority</option>
        <option value="middle">Middle Priority</option>
        <option value="low">Less Priority</option>
      </select>
      <input
        type="date"
        min={todayDate}
        id="deadline"
        value={deadline}
        onChange={handleDeadlineChange}
      />
      <Button className="add-task" onClick={addTask}>
        Add Task
      </Button>
    </div>
  );
}

export default AddTask;
