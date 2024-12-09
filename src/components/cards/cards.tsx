import Card from '../card/card';
import { CardsType } from '../../types/card';

type CardsProps = {
  offers: CardsType;
  onListItemHover: (listItemName: string) => void;
};

function Cards(props: CardsProps): JSX.Element {

  const {offers, onListItemHover} = props;

  const arrayCardItems = Object.values(offers).map((offer) =>
    (
      <Card key = {offer.id} offer = {offer} onListItemHover = {onListItemHover} />)
  );
  return (
    <> {arrayCardItems} </>);
}

export default Cards;
