import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <h1>Header Section</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
