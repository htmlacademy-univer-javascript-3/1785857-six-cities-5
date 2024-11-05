import Card from '../card/card';
import { CardsType } from '../../types/card';

function Cards(offers: CardsType): JSX.Element {

  const arrayCardItems = Object.values(offers).map((offer) =>
    (
      <Card key = {offer.id} id = {offer.id} imageUrl = {offer.imageUrl} header = {offer.header} price = {offer.price} type = {offer.type}
        isFavourite = {offer.isFavourite} isPremium = {offer.isPremium} rating = {offer.rating}
      />)
  );
  return (
    <> {arrayCardItems} </>);
}

export default Cards;
