import React from 'react';

type TodoProps = {
  title: string;
  description: string;
  onDelete: () => void;
  onEdit: () => void;
};

const Todo: React.FC<TodoProps> = ({ title, description, onDelete, onEdit,}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onDelete} className="delete-button">Delete</button>
      <button onClick={onEdit} className="edit-button">Edit</button>
    </div>
  );
};

export default Todo;
