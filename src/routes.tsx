import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ReserveTable from "./pages/ReserveTable";
import ReserveTableConfirmation from "./pages/ReserveTableConfirmation";
import {LittleLemonPages} from "./constants";

export default function () {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<ReserveTable/>} path={LittleLemonPages.Reservation}/>
      <Route element={<ReserveTableConfirmation/>} path={LittleLemonPages.Confirmation}/>
    </Routes>
  );
};
