import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./Pages/TodoPage/TodoPage.js";
import SignupPage from "./Pages/SingupPage/SignupPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import ProductPage from "./Pages/ProductManagement/ProductPage.js";
import ExpensePage from "./Pages/ExpenseTracker/ExpensePage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} /> 
            <Route path="/expense" element={<ExpensePage />} /> 
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
