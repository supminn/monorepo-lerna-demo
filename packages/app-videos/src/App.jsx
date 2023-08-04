import { Header } from "app-header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoList } from "./components/VideoList";
import { VideoDetails } from "./components/VideoDetails";
import { useSelector } from "react-redux";

function App() {
  const { username } = useSelector((state) => state.auth.login);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <VideoList />,
    },
    {
      path: "/playlist",
      element: <VideoList username={username} />,
    },
    {
      path: "/:videoId",
      element: <VideoDetails />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
