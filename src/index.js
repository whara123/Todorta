import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TodoCalender from "./pages/TodoCalender/TodoCalender";
import GlobalStyle from "./styles/GlobalStyle";
import { TodoProvider } from "./TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<TodoCalender />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
