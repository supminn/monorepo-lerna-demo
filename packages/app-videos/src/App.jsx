import { Header } from "app-header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoList } from "./components/VideoList";
import { VideoDetails } from "./components/VideoDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoList />,
  },
  {
    path: "/:videoId",
    element: <VideoDetails />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
