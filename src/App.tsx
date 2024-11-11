import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<div>hello</div>}></Route>
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
