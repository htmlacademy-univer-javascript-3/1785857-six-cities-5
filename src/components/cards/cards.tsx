import Card from '../card/card';
import { CardsType } from '../../types/card';
import { useAppSelector } from '../../hooks';

type CardsProps = {
  onListItemHover: (listItemName: string) => void;
  sortOffers: (offersList: CardsType) => CardsType;
};

function Cards(props: CardsProps): JSX.Element {

  const offers: CardsType = useAppSelector((state) => state.offers);

  const {onListItemHover, sortOffers} = props;

  const sortedOffers = sortOffers(offers);

  const arrayCardItems = Object.values(sortedOffers).map((offer) =>
    (
      <Card key = {offer.id} offer = {offer} onListItemHover = {onListItemHover} />)
  );

  return (
    <> {arrayCardItems} </>);
}

export default Cards;
