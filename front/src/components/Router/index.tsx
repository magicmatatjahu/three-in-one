import React from "react";
import { Router as ReachRouter } from "@reach/router";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../Login";
import Signup from "../Signup";
import PlacesList from "../PlacesList";
import Place from "../Place";
import NotFound from "../NotFound";

const Router: React.FunctionComponent = () => {
  return (
    <ReachRouter>
      <PublicRoute path="/login" pageComponent={Login} />
      <PublicRoute path="/signup" pageComponent={Signup} />

      <ProtectedRoute path="/" pageComponent={PlacesList} />
      <ProtectedRoute path="/places" pageComponent={PlacesList} />
      <ProtectedRoute path="/places/:id" pageComponent={Place} />

      <PublicRoute default pageComponent={NotFound} />
    </ReachRouter>
  )
}

export default Router;
