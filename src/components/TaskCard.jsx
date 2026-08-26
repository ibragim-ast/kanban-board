import styles from "./TaskCard.module.css";

function TaskCard({ task, onDelete, onMove }) {
  return (
    <div className={styles.card}>
      <p>{task.text}</p>
      <select
        value={task.status}
        onChange={(event) => onMove(task.id, event.target.value)}
      >
        <option value="План">План</option>
        <option value="В работе">В работе</option>
        <option value="Готово">Готово</option>
      </select>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </div>
  );
}

export default TaskCard;
