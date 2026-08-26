import { useState } from "react";
import Column from "./Column";
import AddTask from "./AddTask";
import styles from "./Main.module.css";

function Main() {
  const initialTasks = [
    { id: 1, text: "Изучить хуки", status: "План" },
    { id: 2, text: "Сверстать шапку", status: "В работе" },
    { id: 3, text: "Настроить Vite", status: "Готово" },
  ];

  const [tasks, setTasks] = useState(initialTasks);

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
      </main>
      <AddTask onAdd={handleAddTask} />
    </>
  );
}

export default Main;
