import TaskCard from "./TaskCard";

function Column({ title, columnTasks, onDelete, onMove }) {
  return (
    <div>
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
