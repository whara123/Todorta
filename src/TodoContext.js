import React, { useReducer, createContext, useContext, useRef, useEffect } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.todo;
    case "CREATE":
      localStorage.setItem("todoList", JSON.stringify(state.concat(action.todo)));
      return state.concat(action.todo);
    case "TOGGLE":
      localStorage.setItem(
        "todoList",
        JSON.stringify(state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)))
      );
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));

    case "FIRSTDONE":
      localStorage.setItem(
        "todoList",
        JSON.stringify(state.map((todo) => (todo.id === action.id ? { ...todo, firstdone: true } : todo)))
      );
      return state.map((todo) => (todo.id === action.id ? { ...todo, firstdone: true } : todo));

    case "REMOVE":
      localStorage.setItem("todoList", JSON.stringify(state.filter((todo) => todo.id !== action.id)));
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// eslint-disable-next-line react/prop-types
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  const nextId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("todoList");
    if (localData) {
      const localTodoData = JSON.parse(localData);
      nextId.current = localTodoData.length > 0 ? localTodoData[0].id + 1 : 0;
      dispatch({ type: "INIT", todo: localTodoData });
    }
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
