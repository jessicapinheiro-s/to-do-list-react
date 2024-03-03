import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "../pages/login";
import Cadastro from "../pages/cadastro";

enum Paths {
  All = "*",
  Login = "/login",
  Cadastro = "/register",
}
// RouteHandler component responsible for defining the application's routes
function RouteHandler() {
  // Create a hash router using react-router-dom's createHashRouter
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path={Paths.All} element={Login.Page} />
        <Route path={Paths.Cadastro} element={Cadastro.Page} />
        <Route path={Paths.Cadastro} element={Cadastro.Page} />
      </>
    )
  );

  // Use RouterProvider to provide the router to the entire application
  return <RouterProvider router={router} />;
}

// Export the RouteHandler component for external use
export { RouteHandler };