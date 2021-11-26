export interface Screenshots {
  image: string;
  is_deleted: boolean;
}

export interface Developers {
  image_background: string;
  name: string;
  slug: string;
}

export interface Publishers {
  name: string;
  slug: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface ParentPlatforms {
  platform: {
    id: number;
    name: string;
  }
}

export interface Platforms {
  platform: {
    id: number;
    name: string;
  }
}