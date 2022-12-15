import Signup from "../Signup";
import Login from "../Login";
import TodoList from "../TodoList";


const routes = [
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/todo",
      element: <TodoList />,
    },
  ];
  
  export default routes;