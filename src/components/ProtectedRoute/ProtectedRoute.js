import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, path, redirect, children }) => {
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to={redirect} />}
    </Route>
  );
};

export default ProtectedRoute;
