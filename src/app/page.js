"use client";

import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div className="site-wrap">
      <header className="navbar bg-base-100 shadow-md">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <Categories category={category} onSelect={onSelect} />
      </header>
      <NewsList category={category} />
    </div>
  );
};

export default App;
