import Task from "./Task";

export default function TaskList({ list }) {
  return (
    <>
      <ul>
        {list.map((tasks) => (
          <Task
            key={tasks.id}
            title={tasks.title}
            completed={tasks.completed}
            description={tasks.description}
          />
        ))}
      </ul>
    </>
  );
}