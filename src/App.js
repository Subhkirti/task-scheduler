import React, { useState } from "react";
import "./App.css"; // Import your CSS file here
import Header from "./components/header";
import UpcomingTasks from "./components/upcomingTasks";
import CompletedTasks from "./components/completedTasks";
import AddTask from "./components/addTask";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import showToastBar from "./components/toastBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
      showToastBar({
        message: "Marked done successfully.",
        severity: "success",
      });
    }

  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    showToastBar({
      message: "Deleted successfully.",
      severity: "success",
    });
  };

  const upcomingTasks = tasks.filter((t) => !t.done);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <div className="App">
          <Header />
          <main>
            <AddTask
              task={task}
              priority={priority}
              deadline={deadline}
              setTask={setTask}
              setPriority={setPriority}
              setDeadline={setDeadline}
              tasks={tasks}
              setTasks={setTasks}
            />
            <UpcomingTasks
              upcomingTasks={upcomingTasks}
              markDone={markDone}
              deleteTask={deleteTask}
            />
            <CompletedTasks completedTasks={completedTasks} />
          </main>
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
