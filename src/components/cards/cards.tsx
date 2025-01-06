import Card from '../card/card';
import { CardsType } from '../../types/card';
import { useAppSelector } from '../../hooks';
import { CityType } from '../../types/city';
import { ReducerTypes } from '../../utils/constants';
import { useMemo } from 'react';

type CardsProps = {
  onListItemHover: (listItemName: string) => void;
  sortOffers: (offersList: CardsType) => CardsType;
};

function Cards(props: CardsProps): JSX.Element {

  const {onListItemHover, sortOffers} = props;

  const offers: CardsType = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offers);

  const currentCity: CityType = useAppSelector((state) => state[ReducerTypes.CITY_REDUCER].city);

  const currentCards = useMemo(() => offers.filter((elem) => elem.city.name === currentCity.name), [currentCity.name, offers]);

  const sortedOffers = useMemo(() => sortOffers(currentCards), [currentCards, sortOffers]);

  const arrayCardItems = useMemo(() => Object.values(sortedOffers).map((offer) =>
    (
      <Card key = {offer.id} offer = {offer} onListItemHover = {onListItemHover} />)
  ), [onListItemHover, sortedOffers]);

  return (
    <> {arrayCardItems} </>);
}

export default Cards;
