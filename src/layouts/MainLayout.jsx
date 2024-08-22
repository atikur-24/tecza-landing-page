import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <h1>Header Section</h1>
      <Outlet />
      <h1>Footer Section</h1>
    </>
  );
};

export default MainLayout;
