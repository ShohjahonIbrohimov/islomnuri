import React from "react";
import { Home, Quiz } from "../pages";

export const ROUTES = [
  {
    path: "/",
    key: "APP_HOME",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/quiz/:count/:tags",
    key: "APP_QUIZ",
    exact: true,
    component: () => <Quiz />,
  },
];
