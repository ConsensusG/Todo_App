import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import './TodoWrapper.css';

type TodoItem = {
  title: string;
  description: string;
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 


  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

 
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };


  const editTodo = (index: number, updatedTodo: TodoItem) => {
    setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
    setEditingIndex(null);
  };


  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="card card-background">
      <h2 className="card-title">Todo List</h2>

      <TodoForm 
      addTodo={addTodo} 
      />
      {todos.map((todo, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <EditTodoForm
              todo={todo}
              deleteTodo={() => deleteTodo(index)}
              editTodo={(updatedTodo) => editTodo(index, updatedTodo)}
              cancelEdit={handleCancelEdit}
            />
          ) : (

            <Todo 
              title={todo.title}
              description={todo.description}
              onDelete={() => deleteTodo(index)}
              onEdit={() => handleEdit(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoWrapper;
