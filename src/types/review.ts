type ReviewType = {
  id: number;
  offerId: number;
  avatarUrl: string;
  userName: string;
  rating: number;
  text: string;
  dateTime: Date;
}

type ReviewsType = ReviewType[];

export type { ReviewType, ReviewsType };
