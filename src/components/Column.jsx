import TaskCard from "./TaskCard";

function Column({ title, columnTasks, onDelete }) {
  return (
    <div>
      <h2>{title}</h2>
      {columnTasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Column;
