import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from "./components/SideBar";
import NavBar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  return (
    <div className="container-fluid bg-body-secondary min-vh-100">
      <div className="row">
        <div className="col-4 col-md-2 vh-100 bg-white">
          <SideBar />
        </div>
        <div className="col p-0">
          <NavBar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
