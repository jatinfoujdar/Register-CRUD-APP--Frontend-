import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  routes  from "./components/utils/routes";


function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
