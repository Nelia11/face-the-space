export interface SpaceTravelData {
  destinations: TravelDestination[];
  crew: CrewMember[];
  technologies: Tech[];
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

export interface Tech {
  name: string;
  description: string;
}
