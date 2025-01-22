import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="w-full h-screen ">
      <Head />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;

{
  /**
   *
   * Head
   * Body
   *  Sidebar
   *    MenuItems
   *  MainContainer
   *    ButtonsList
   *    VideoContainer
   *      VideoCard
   *
   *
   */
}
