/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const Stasiun = lazy(() => import("../pages/Stasiun"));
const User = lazy(() => import("../pages/User"));
const Mesin = lazy(() => import("../pages/Mesin"));

const coreRoutes = [
  {
    path: "/stasiun",
    title: "Stasiun",
    component: Stasiun,
  },
  {
    path: "/user",
    title: "User",
    component: User,
  },
  {
    path: "/mesin",
    title: "Mesin",
    component: Mesin,
  },
];

const routes = [...coreRoutes];
export default routes;
