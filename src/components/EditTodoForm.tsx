import React, { useState } from 'react';
import './EditTodoForm.css';

type TodoItem = {
  title: string;
  description: string;
};

type EditTodoFormProps = {
  todo: TodoItem;
  deleteTodo: () => void;
  editTodo: (updatedTodo: TodoItem) => void;
  cancelEdit: () => void;
};

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, deleteTodo, editTodo, cancelEdit }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleDelete = () => {
    deleteTodo();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTodo: TodoItem = {
      title,
      description,
    };

    editTodo(updatedTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="edit-form-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="edit-form-textarea"
        />
        <button type="submit" className="edit-form-button">
          Save
        </button>
        <button onClick={cancelEdit} className="edit-form-button">
          Cancel
        </button>
      </form>
      <button onClick={handleDelete} className="edit-form-deletebutton">
        Delete
      </button>
    </div>
  );
};

export default EditTodoForm;
