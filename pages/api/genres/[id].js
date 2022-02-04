import getConfig from 'next/config';
import { PrismaClient } from '@prisma/client';

const getGenre = async (id) => {
  const prisma = new PrismaClient();
  const genre = await prisma.genres.findUnique({
    where: {
      id,
    },
  });

  return genre;
};

const genre = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getGenre(parseInt(req.query.id, 10)));
      break;

    default:
      res.status(405).end();
      break;
  }
};

export default genre;
