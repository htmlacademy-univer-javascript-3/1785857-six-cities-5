import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useCallback } from 'react';
import { AuthorizationStatus, cssClass, Path, ReducerTypes } from '../../utils/constants';
import { toggleFavouriteOffersAction } from '../../store/api-actions';
import { CardType } from '../../types/card';

type BookmarkProps = {
  sectionClass: cssClass;
  offer: CardType;
}

function Bookmark(props: BookmarkProps): JSX.Element {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(((state) => state[ReducerTypes.USER_REDUCER].authorizationStatus));

  const { sectionClass, offer } = props;

  const toggleFavouriteStatus = useCallback(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(
        toggleFavouriteOffersAction({
          id: offer.id,
          favState: !offer.isFavorite,
        })
      );
    } else {
      navigate(Path.LoginPage);
    }
  }, [authorizationStatus, offer, dispatch, navigate]);

  return (
    <button className={`${sectionClass}__bookmark-button button ${offer.isFavorite ? `${sectionClass}__bookmark-button--active` : ''}`} type="button" onClick={toggleFavouriteStatus}>
      <svg className={`${sectionClass}__bookmark-icon`} width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default Bookmark;
