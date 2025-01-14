import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Masodik from "./pages/Masodik";
import Elso from "./pages/Elso";
import Termek from "./pages/Termek";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="elso" element={<Elso/>}>
    <Route path="masodik" element={<Masodik/>}></Route>
    <Route path="*" element={<h1>404, az oldal nem található</h1>} /></Route>
    <Route path="termek/:id" element={<Termek/>}></Route>
  </Routes>
  </BrowserRouter>
</React.StrictMode>);

reportWebVitals();
