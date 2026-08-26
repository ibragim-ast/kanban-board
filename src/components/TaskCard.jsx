import styles from "./TaskCard.module.css";

function TaskCard({ task, onDelete, onMove }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{task.text}</p>
      <div className={styles.controls}>
        <select
          className={styles.statusSelect}
          value={task.status}
          onChange={(event) => onMove(task.id, event.target.value)}
        >
          <option className={styles.statusSelect} value="План">
            План
          </option>
          <option value="В работе">В работе</option>
          <option value="Готово">Готово</option>
        </select>
        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(task.id)}
          title="Удалить задачу"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
