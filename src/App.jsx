import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
