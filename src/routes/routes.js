import React from "react";
import {
  Home,
} from "../pages";

export const ROUTES = [
  {
    path: "/",
    key: "APP_HOME",
    exact: true,
    component: () => <Home />,
  }
];

