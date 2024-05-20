import React, { FC } from 'react';

interface Game {
  id: number;
  name: string;
  rating: number;
  platforms: string[];
  maxPlayersOnline: number;
  maxPlayersOffline: number;
  languages: string[];
}

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = () => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-2'>GameName</h2>
      <p>Rating:</p>
      <p>Platforms:</p>
      <p>Max Players Online:</p>
      <p>Max Players Offline:</p>
      <p>Languages:</p>
    </div>
  );
};

export default GameCard;
