"use client";

import NewsList from "./components/NewsList";

const App = () => {
  return (
    <div className="site-wrap">
      <header className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </header>
      <NewsList />
    </div>
  );
};

export default App;
