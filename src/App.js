import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Categories from "./components/Pages/Categories";
import TaskInput from "./components/Pages/TaskInput";
import TaskList from "./components/Pages/TaskList";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));
  const toggleComplete = (taskId) =>
  setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));

  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
          path="/taskinput"
            element={
                 <>
                  <TaskInput addTask={addTask} />
                  <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
                </>
              }
            />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

