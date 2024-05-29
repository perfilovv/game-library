export interface Game {
  id: number;
  name: string;
  rating: number;
  platforms: {
    name: string;
  }[];
  maxPlayersOnline: number;
  maxPlayersOffline: number;
  language_supports: {
    id: number;
    language: {
      name: string;
    };
  }[];
  cover: {
    url: string;
  };
}
