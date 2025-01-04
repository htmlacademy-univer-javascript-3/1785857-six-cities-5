import { UserType } from './user';

type ReviewType = {
  id: string;
  user: UserType;
  rating: number;
  comment: string;
  date: string;
}

type ReviewsType = ReviewType[];

export type { ReviewType, ReviewsType };

