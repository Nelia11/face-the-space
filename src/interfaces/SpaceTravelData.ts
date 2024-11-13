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

// Assuming this is your Tech interface
export interface Tech {
  name: string;
  description: string;
  landscapeImage?: string;
  portraitImage?: string;
}

