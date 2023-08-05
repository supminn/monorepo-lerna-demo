import { Header } from "app-header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoList } from "./components/VideoList";
import { VideoDetails } from "./components/VideoDetails";
import { Playlist } from "./components/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoList />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
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
