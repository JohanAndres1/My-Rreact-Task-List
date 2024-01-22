import { useState } from "react";

export default function Task({ id, title, description, completed, toggleCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const titleInputId = `title-input-${id}`;
  const descriptionInputId = `description-input-${id}`;

  const handleToggleComplete = () => {
    toggleCompleted({ title, completed: !completed });
  };

  const handleDelete = () => {
    deleteTask(title);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(title, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            id={titleInputId}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor={descriptionInputId}>Nueva descripcion</label>
          <input 
            id={descriptionInputId}
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <label>
            {title}
            <p>{description}</p>
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={handleToggleComplete}
            />
          </label>
          <button type="button" onClick={handleEdit}>
            Editar
          </button>
          <button type="button" onClick={handleDelete}>
            Borrar
          </button>
        </>
      )}
    </li>
  );
}