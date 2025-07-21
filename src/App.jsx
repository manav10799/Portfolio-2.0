import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./pages/RootLayout";
import ThemeContext from "./store/ThemeContext";
import { useContext, useEffect, useState } from "react";

function App() {
  const currentTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    window.document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-white dark:bg-black/90 text-gray-700 dark:text-gray-50">
        <RouterProvider router={browserRouter}></RouterProvider>
      </div>
    </ThemeContext.Provider>
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
