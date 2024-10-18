import {AuthorizationStatus, Path} from '../../utils/constants';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to = {Path.LoginPage}/>
  );
}

export default PrivateRoute;
