import { useState, useEffect } from "react";
import Column from "./Column";
import AddTask from "./AddTask";
import styles from "./Main.module.css";

function Main() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: "План",
    };

    setTasks([...tasks, newTask]);
  };

  const handleMoveTask = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        } else {
          return task;
        }
      }),
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Трекер задач</h1>
        <div className={styles.columns}>
          <Column
            title="План"
            columnTasks={tasks.filter((item) => item.status === "План")}
            onDelete={handleDeleteTask}
            onMove={handleMoveTask}
          />
          <Column
            title="В работе"
            columnTasks={tasks.filter((item) => item.status === "В работе")}
            onDelete={handleDeleteTask}
            onMove={handleMoveTask}
          />
          <Column
            title="Готово"
            columnTasks={tasks.filter((item) => item.status === "Готово")}
            onDelete={handleDeleteTask}
            onMove={handleMoveTask}
          />
        </div>
      </main>
      <AddTask onAdd={handleAddTask} />
    </>
  );
}

export default Main;
