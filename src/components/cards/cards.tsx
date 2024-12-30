import Card from '../card/card';
import { CardsType } from '../../types/card';
import { useAppSelector } from '../../hooks';
import { CityType } from '../../types/city';

type CardsProps = {
  onListItemHover: (listItemName: string) => void;
  sortOffers: (offersList: CardsType) => CardsType;
};

function Cards(props: CardsProps): JSX.Element {

  const offers: CardsType = useAppSelector((state) => state.offers);

  const currentCity: CityType = useAppSelector((state) => state.city);

  const currentCards = offers.filter((elem) => elem.city.name === currentCity.name);

  const {onListItemHover, sortOffers} = props;

  const sortedOffers = sortOffers(currentCards);

  const arrayCardItems = Object.values(sortedOffers).map((offer) =>
    (
      <Card key = {offer.id} offer = {offer} onListItemHover = {onListItemHover} />)
  );

  return (
    <> {arrayCardItems} </>);
}

export default Cards;
