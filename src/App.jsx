import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./pages/RootLayout";

function App() {
  return (
    <div className="bg-white dark:bg-black/90">
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}

const browserRouter = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default App;
