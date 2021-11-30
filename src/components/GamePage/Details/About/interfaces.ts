import { Genres, ParentPlatforms, Series } from "../../../../shared/api.interfaces";

export interface AboutProps {
  nameSlug: string;
  genres: Genres[];
  genreSlug: string;
  platforms: ParentPlatforms[];
  versions: Series[];
  description: string;
  readMore?: boolean;
  website: string;
  reddit: string;
  onReadMoreClick?: () => void;
}