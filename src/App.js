import "./App.js"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Contact from "./Pages/Contact";
import Task from "./Pages/Task";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Update from "./components/Update.js";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Task" element={<Task/>} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
