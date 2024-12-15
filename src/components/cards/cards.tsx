import Card from '../card/card';
import { CardsType } from '../../types/card';
import { useAppSelector } from '../../hooks';

type CardsProps = {
  onListItemHover: (listItemName: string) => void;
};

function Cards(props: CardsProps): JSX.Element {

  const offers: CardsType = useAppSelector((state) => state.offers);

  const {onListItemHover} = props;

  const arrayCardItems = Object.values(offers).map((offer) =>
    (
      <Card key = {offer.id} offer = {offer} onListItemHover = {onListItemHover} />)
  );
  return (
    <> {arrayCardItems} </>);
}

export default Cards;
