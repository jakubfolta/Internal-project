import { Developers, Publishers, Screenshots } from "../../shared/api.interfaces";

export interface Game {
  achievements_count: number;
  background_image: string;
  description_raw: string;
  developers: Developers[];
  genres: {
    name: string;
  }[];
  id: number;
  metacritic: number;
  metacritic_url: string;
  name: string;
  parent_platforms: {
    platform: { name: string; };
  }[];
  playtime: number;
  publishers: Publishers[];
  random_screenshot: number;
  rating: number;
  released: string;
  screenshots: Screenshots[];
  series: {}[];
  slug: string;
  website: string;
}