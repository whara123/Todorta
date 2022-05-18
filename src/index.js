import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home/Home";
import TodoCalender from "./pages/TodoCalender/TodoCalender";
import TodoLand from "./pages/TodoLand/TodoLand";
import GlobalStyle from "./styles/GlobalStyle";
import { TodoProvider } from "./TodoContext";

const container = document.getElementById("root");
const root = createRoot(container);

function App() {
  const location = useLocation();
  return (
    <TodoProvider>
      <GlobalStyle />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300} mountOnEnter unmountOnExit>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/calender" element={<TodoCalender />} />
            <Route path="/todoLand" element={<TodoLand />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </TodoProvider>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
