import axios from 'axios';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';

interface Game {
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

const GameCard: FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {
        setError('Error fetching games');
      }
    };
    fetchGames();
  }, []);
  console.log(games);
  return (
    <div className='container mx-auto p-4'>
      {error && <div className='text-red-500 text-center'>{error}</div>}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {games &&
          games.map(
            (
              { id, name, rating, platforms, language_supports, cover },
              index
            ) => (
              <div key={id} className='bg-gray-100 p-4 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-2'>
                  {index + 1}. {name}
                </h2>
                <p>Rating: {Math.round(rating)}</p>
                <p>
                  Platforms:{' '}
                  {platforms.map((platform) => platform.name).join(', ')}
                </p>
                <Image
                  src={`https:${cover.url}`}
                  alt={`Cover for ${name}`}
                  width={132}
                  height={132}
                />
                <p>Max Players Online:</p>
                <p>Max Players Offline:</p>
                <p>
                  Languages:{' '}
                  {language_supports &&
                    language_supports.map((support) => (
                      <Fragment key={support.id}>
                        {support.language.name + ', '}
                      </Fragment>
                    ))}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default GameCard;
