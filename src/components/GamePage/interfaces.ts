export interface Game {
  achievements_count: number;
  background_image: string;
  description_raw: string;
  developers: {
    image_background: string;
    name: string;
    slug: string;
  }[];
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
  publishers: {
    name: string;
    slug: string;
  }[];
  random_screenshot: number;
  rating: number;
  released: string;
  screenshots: {
    image: string;
    is_deleted: boolean;
  }[];
  series: {

  }[];
  slug: string;
  website: string;
}