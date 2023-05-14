import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Update from "../pages/Update";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/createuser" element={<CreateUser />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
    </Routes>
  );
}
export default AppRoutes;
