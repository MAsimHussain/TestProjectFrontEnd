import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import AddEmployee from "./components/AddEmployee.jsx";
import EditEmployee from "./components/EditEmployee.jsx";
import EmployeeList from "./components/EmployeeList.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<EmployeeList />}></Route>
      <Route path="/EditEmployee" element={<EditEmployee />}></Route>
      <Route path="/AddEmployee" element={<AddEmployee />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
