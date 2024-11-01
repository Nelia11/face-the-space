export interface SpaceTravelData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

export interface Destination {
  name: string;
  images: ImageFormats;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: TechnologyImages;
  description: string;
}

export interface ImageFormats {
  png: string;
  webp: string;
}

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}
