import { useState } from 'react'
import './TodoForm.css';

type NewTodo = {
  title: string;
  description: string;
};

type TodoFormProps = {
  addTodo: (newTodo: NewTodo) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: NewTodo = {
      title,
      description,
    };

    addTodo(newTodo);

    setTitle('');
    setDescription('');
  };

return (
  <form onSubmit={handleSubmit} className="formContainer">
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      className="formInput"
    />
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      className="formTextarea"
    />
    <button type="submit" className="formButton">
      Add Todo
    </button>
  </form>
);
};

export default TodoForm;
