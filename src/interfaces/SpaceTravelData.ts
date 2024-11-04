export interface SpaceTravelData {
  destinations: TravelDestination[];
  crew: CrewMember[];
  technology: Technology[];
}

export interface TravelDestination {
  name: string;
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

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}
