import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AdminRoom } from './pages/AdminRoom';
import { Room } from './pages/Room';
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
