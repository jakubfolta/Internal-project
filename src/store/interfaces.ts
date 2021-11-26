import { Genres, ParentPlatforms, Platforms } from "../shared/api.interfaces";

export interface Context {
  games: {
    id: number;
    background_image: string;
    genres: Genres[];
    metacritic: number;
    name: string;
    parent_platforms: ParentPlatforms[];
    platforms: Platforms[];
    playtime: number;
    rating: number;
    released: string;
    short_screenshots: {
      image: string;
    }[];
    slug: string;
  }[];
  error: boolean | string;
  setGames: (games: any[]) => void;
  setError: (error: string | boolean) => void;
}