import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { BestProduct } from "./api/Api";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppDownload from "./components/Home/AppDownload";

// LayOut
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <AppDownload />
      <MainFooter />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: BestProduct,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
