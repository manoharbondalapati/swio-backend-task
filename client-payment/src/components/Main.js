import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./payment";
import Transaction from "../tran";
import Success from "./success";
import Cancel from "./cancel";
import Header from "./header";

const First = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default First;
