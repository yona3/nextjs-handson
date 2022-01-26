import React from 'react';
import getConfig from 'next/config';

const fetchData = async (keyword) => {
  const { VERCEL_URL } = getConfig().publicRuntimeConfig;

  const query = new URLSearchParams();
  if (keyword) query.set('keyword', keyword);

  const res = await fetch(`${VERCEL_URL}/api/shops?${query.toString()}`);
  return await res.json();
};

const Shops = ({ shops }) => {
  return (
    <ul>
      {shops.map((shop) => {
        return <li key={shop.id}>{shop.name}</li>;
      })}
    </ul>
  );
};

export const getServerSideProps = async (req) => {
  const data = await fetchData(req.query.keyword);

  return {
    props: {
      shops: data,
    },
  };
};

export default Shops;
