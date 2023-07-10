import NavLayout from "./layouts/NavLayout";
import NotFound from "./pages/404";
import About from "./pages/About";
import Fact from "./pages/Fact";
import Home from "./pages/Home";

const router = [
  {
    element: <NavLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Fact />,
        path: "fact/:factId",
      },
    ],
  },

  {
    element: <NotFound />,
    path: "*",
  },
];
export default router;
