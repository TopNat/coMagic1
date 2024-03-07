import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Main />}></Route>
      <Route path="/" element={<Main />}></Route>
      <Route path="/reg" element={<Registration />}></Route>
    </Routes>
  );
};

export default AppRoutes;
