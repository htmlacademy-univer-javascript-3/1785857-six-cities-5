import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { APIRoute, AuthorizationStatus, Path, ReducerTypes } from '../../utils/constants';

function Header(): JSX.Element {

  const authStatus: AuthorizationStatus = useAppSelector((state) => state[ReducerTypes.USER_REDUCER].authorizationStatus);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const userData = useAppSelector((state) => state[ReducerTypes.USER_REDUCER].userData);

  const favourite = useAppSelector((state) => state[ReducerTypes.FAVOURITE_REDUCER].favourite);

  /* useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, authStatus, userData]); */

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
    navigate(APIRoute.Login);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={Path.MainPage}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {authStatus === AuthorizationStatus.Auth ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={Path.FavPage}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{borderRadius: '50%', backgroundImage: userData ? `url(${userData?.avatarUrl})` : `url(${localStorage.getItem('avatarUrl')})`}}>
                    </div>
                    <span className="header__user-name user__name">{userData ? userData.email : localStorage.getItem('email')}</span>
                    <span className="header__favorite-count">{favourite.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" onClick={handleLogout} to="/" >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
            :
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login" >
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
