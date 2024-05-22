import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
  rating: number;
  platforms: string[];
  maxPlayersOnline: number;
  maxPlayersOffline: number;
  languages: string[];
}

const GameCard: FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {}
    };
    fetchGames();
  }, []);
  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {games &&
          games.map((game) => (
            <div key={game.id} className='bg-gray-100 p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-semibold mb-2'>{game.name}</h2>
              <p>Rating:</p>
              <p>Platforms:</p>
              <p>Max Players Online:</p>
              <p>Max Players Offline:</p>
              <p>Languages:</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameCard;
