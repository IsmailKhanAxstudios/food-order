import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RestaurantsMenuCard from "./components/RestaurantsMenuCards/RestaurantsMenuCard";
import { Suspense } from "react";
import { useState, useEffect, useContext } from "react";
import Profile from "./utils/Profile";
import store from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import CheckOut from "./components/CheckOut/CheckOut";
const LazyLoading = lazy(() => import("./components/LazyLoading/LazyLoading"));

const AppLayout = () => {
  const [userName, setUserName] = useState("John");

  useEffect(() => {
    setUserName("TestMan");
  }, []);

  return (
    <Provider store={store}>
      <Profile.Provider value={{ loginUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
        <ToastContainer />
      </Profile.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenuCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },

      {
        path: "/lazyload",
        element: (
          <Suspense fallback={<h1>Loading data...</h1>}>
            <LazyLoading />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
