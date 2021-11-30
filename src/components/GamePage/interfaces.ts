import { Developers, Genres, ParentPlatforms, Publishers, Screenshots, Series } from "../../shared/api.interfaces";

export interface Game {
  achievements_count: number;
  background_image: string;
  background_image_additional: string;
  description_raw: string;
  developers: Developers[];
  genres: Genres[];
  id: number;
  metacritic: number;
  metacritic_url: string;
  name: string;
  platforms: ParentPlatforms[];
  playtime: number;
  publishers: Publishers[];
  random_screenshot: number;
  rating: number;
  released: string;
  screenshots: Screenshots[];
  series: Series[];
  slug: string;
  website: string;
  reddit_url: string;
}