import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TodoCalender from "./pages/TodoCalender/TodoCalender";
import TodoLand from "./pages/TodoLand/TodoLand";
import GlobalStyle from "./styles/GlobalStyle";
import { TodoProvider } from "./TodoContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<TodoCalender />} />
          <Route path="/todoLand" element={<TodoLand />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
