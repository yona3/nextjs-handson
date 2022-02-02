import getConfig from 'next/config';
import { PrismaClient } from '@prisma/client';

const getGenres = async () => {
  const prisma = new PrismaClient();
  const genres = await prisma.genres.findMany();

  return genres;
};

const genres = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getGenres());
    default:
      return res.status(405).end();
  }
};

export default genres;
