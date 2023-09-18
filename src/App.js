import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Home from "./pages/home/home.js";
import AddProfessor from "./pages/addProfessor/addProfessor.jsx";

import Home from "./pages/home/home";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

// function App() {
//   return (
//     <>
//       <div className="container">
//         <RouterProvider router={router} />
//       </div>
//     </>
//   );
// }


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}





export default App;
