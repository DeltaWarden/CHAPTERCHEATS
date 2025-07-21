import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header/Header";
// import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      {/* <footer className="footer">
        <Footer />
      </footer> */}
    </div>
  );
};

export default App;
