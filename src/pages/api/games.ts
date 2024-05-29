import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const headers = {
  'Client-ID': process.env.IGDB_CLIENT_ID,
  Authorization: `Bearer ${process.env.IGDB_API_KEY}`,
};

const fields = [
  'name',
  'language_supports.language.name',
  'cover.url',
  'screenshots.url',
  'rating',
  'platforms.name',
  'multiplayer_modes.offlinecoop',
  'multiplayer_modes.offlinecoopmax',
  'multiplayer_modes.onlinecoop',
];

const queryString = `
  fields ${fields.join(',')};
  sort rating desc;
  limit 100;
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.IGDB_CLIENT_ID || !process.env.IGDB_API_KEY) {
    console.error('Missing IGDB API credentials');
    res.status(500).json({ error: 'Missing IGDB API credentials' });
    return;
  }
  try {
    console.log('Request to IGDB API:', queryString);
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      queryString,
      {
        headers,
      }
    );

    const games = response.data.map((game: { cover: { url: string } }) => ({
      ...game,
      cover: {
        ...game.cover,
        url: game.cover.url.replace('t_thumb', 't_cover_small'),
      },
    }));
    console.log('Response from IGDB API:', games);
    res.status(200).json(games);
  } catch (error) {
    console.error('Error fetching data from IGDB API:', error);
    const message =
      error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
}
