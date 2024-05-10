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
        <a href="/" className="btn btn-ghost text-xl">
          방구석코딩 뉴스
        </a>
        <Categories category={category} onSelect={onSelect} />
      </header>
      <NewsList category={category} />
      <footer className="footer flex items-center justify-center min-h-[80px] p-4 bg-neutral text-neutral-content">
        <p className="text-[1.5rem]">ⓒ, Copyright, All right reserved</p>
      </footer>
    </div>
  );
};

export default App;
