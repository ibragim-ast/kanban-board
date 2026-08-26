import styles from "./TaskCard.module.css";

function TaskCard({ task, onDelete }) {
  return (
    <div className={styles.card}>
      <p>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </div>
  );
}

export default TaskCard;
