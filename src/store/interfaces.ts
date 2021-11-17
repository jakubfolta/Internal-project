export interface Context {
  games: {
    id: number;
    background_image: string;
    genres: {
      id: number;
      name: string;
    }[];
    metacritic: number;
    name: string;
    parent_platforms: {
      platform: {
        id: number;
        name: string;
      }
    }[];
    platforms: {
      platform: {
        id: number;
        name: string;
      }
    }[];
    playtime: number;
    rating: number;
    released: string;
    short_screenshots: {
      image: string;
    }[];
  }[];
  error: boolean | string;
  slideLeft: () => void;
}