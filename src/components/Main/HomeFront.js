import React from "react";
import Film from "../Film/Film";
import Home from "./Home";
import Rules from "../Rules/Rules";
import History from "../History/History";
import Schedule from "../Schedule/Schedule";
import { Route, Routes } from "react-router-dom";

export default function HomeFront() {
  // const [selection, setSelection] = useState("Home");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Film" element={<Film />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </>
  );
}
