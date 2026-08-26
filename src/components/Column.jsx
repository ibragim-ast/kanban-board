import TaskCard from "./TaskCard";
import styles from "./Column.module.css";

function Column({ title, columnTasks, onDelete, onMove }) {
  return (
    <div className={styles.column}>
      <h2>{title}</h2>
      {columnTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
    </div>
  );
}

export default Column;
