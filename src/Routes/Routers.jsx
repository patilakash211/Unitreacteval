import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { Employee } from "../Components/Employee";


export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Employee" element={<Employee />} />
        {/* <Route path="Employee/:EmployeeId" element={SingleEmployee} /> */}
      </Routes>
    </>
  );
};