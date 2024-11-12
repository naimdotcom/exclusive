import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}></Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <div className="h-6 bg-black text-white">hello</div>
    </>
  );
}

export default App;
