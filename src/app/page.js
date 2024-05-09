"use client";

import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="site-wrap">
      <header className="navbar bg-base-100 shadow-md">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <Categories />
      </header>
      <NewsList />
    </div>
  );
};

export default App;
