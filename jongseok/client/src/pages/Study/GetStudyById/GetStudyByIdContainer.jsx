import React, { useState, useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';

const initialStateForTodo = {
  todos: [],
  loading: true,
  error: false,
};

const todoReducer = (state = initialStateForTodo, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return { ...state, todos: [...state.todos, action.payload], loading: false };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
        ),
        loading: false,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const GetStudyByIdContainer = () => {
  // todo list
  const [state, dispatch] = useReducer(todoReducer, initialStateForTodo);

  const [todoData, setTodoData] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'CREATE_TODO',
        payload: { id: uuidV4(), text: todoData, completed: false },
      });
      setTodoData('');
    }
  };

  return (
    <div>
      <input
        type={'text'}
        placeholder={'스터디 Todo List를 작성해주세요. '}
        onChange={(event) => setTodoData(event.target.value)}
        value={todoData}
        style={{
          width: '100%',
          border: '1px solid black',
          boxSizing: 'border-box',
          padding: '8px',
        }}
        onKeyPress={handleKeyPress}
      />

      <div>
        {state.todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
            <h1
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'red' : 'inherit',
              }}
              onClick={() => {
                dispatch({ type: 'COMPLETE_TODO', payload: todo.id });
              }}
            >
              {todo.text}
            </h1>
            <span
              onClick={() => {
                if (window.confirm('삭제하시겠습니까?')) {
                  dispatch({ type: 'DELETE_TODO', payload: todo.id });
                }
              }}
              style={{ marginLeft: '10px', color: 'red', cursor: 'pointer', fontSize: '18px' }}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStudyByIdContainer;
