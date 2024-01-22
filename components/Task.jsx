export default function Task({ title, completed, description }) {
  return (
    <li>
      <h4>{title}</h4>
      <label style={{ textDecoration: completed ? "line-through" : "none" }}>
        {description}
        <input type="checkbox" checked={completed} readOnly />
      </label>
    </li>
  );
}