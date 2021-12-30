import { Routes, Route } from "react-router-dom";
// import Login from "../components/login/Login";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Footer />} />
    </Routes>
  );
};

export default Router;
