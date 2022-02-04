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

const updateGenre = async (id, { code, name }) => {
  const prisma = new PrismaClient();

  const data = {};
  if (code) data.code = code;
  if (name) data.name = name;

  const genre = await prisma.genres.update({
    where: {
      id,
    },
    data,
  });

  return genre;
};

const genre = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getGenre(parseInt(req.query.id, 10)));
      break;

    case 'PATCH':
      return res.status(200).json(await updateGenre(parseInt(req.query.id, 10), req.body));
      break;

    default:
      res.status(405).end();
      break;
  }
};

export default genre;
