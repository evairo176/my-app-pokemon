import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Loading from "./components/moleculars/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const storeData = useSelector((store) => store?.global);
  const { isLoading } = storeData;

  return (
    <BrowserRouter>
      <ToastContainer />
      {isLoading && <Loading />}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
