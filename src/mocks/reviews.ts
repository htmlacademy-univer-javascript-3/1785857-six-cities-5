import { ReviewsType } from '../types/review.ts';

const reviews: ReviewsType = [
  {
    id: 1,
    offerId: 1,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Eden',
    userName: 'Max Payne',
    rating: 5,
    text: 'Great experience! A pleasant hotel to stay. 100% worth it!',
    dateTime: new Date(2023, 11, 31, 12, 30, 0),
  },
  {
    id: 2,
    offerId: 1,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Liam',
    userName: 'Duke Nukem',
    rating: 5,
    text: 'We enjoyed this hotel very much!',
    dateTime: new Date(2024, 10, 29, 10, 30, 0),
  },
  {
    id: 3,
    offerId: 2,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Christopher',
    userName: 'Harry Potter',
    rating: 4,
    text: 'Cool, but it could be cheaper though!',
    dateTime: new Date(2024, 12, 10, 10, 35, 0),
  },
  {
    id: 4,
    offerId: 2,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Nolan',
    userName: 'Elon Musk',
    rating: 2,
    text: 'Too expensive! Never come back again!',
    dateTime: new Date(2024, 12, 10, 10, 35, 0),
  },
  {
    id: 5,
    offerId: 3,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Caleb',
    userName: 'Donald Trump',
    rating: 5,
    text: 'Nice cosy place to stay! Great relax for the whole family',
    dateTime: new Date(2024, 10, 29, 10, 30, 0),
  },
  {
    id: 6,
    offerId: 4,
    avatarUrl: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jocelyn',
    userName: 'Jack Daniels',
    rating: 3,
    text: 'My dog did not like it, so next time I plan to come with my cat',
    dateTime: new Date(2023, 11, 31, 12, 30, 0),
  },
];

export default reviews;
