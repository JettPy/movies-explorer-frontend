import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, path, children }) => {
  return (
    <Route exact path={path}>
      { loggedIn ? children : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
