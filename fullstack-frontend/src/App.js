import "./App.css";
import "../node_modules/bootstrap/dist/css//bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Chart from "./users/Charts/Covid_Data";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/adduser" element={<AddUser />}></Route>
          <Route exact path="/edituser/:id" element={<EditUser />}></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser />}></Route>
          <Route exact path="/worldWide" element={<Chart />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;
