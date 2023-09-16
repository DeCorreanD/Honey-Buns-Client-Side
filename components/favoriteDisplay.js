/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getFavoritedItems } from '../utils/data/itemsData';
import FavItemCard from './items/FavItemCard';

export default function FavoriteDisplay() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  const getFavorites = () => {
    getFavoritedItems(user.id, user.uid).then(setFavorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <div>
        {favorites.map((favorite) => (
          <section key={`favorite--${favorite.id}`}>
            <FavItemCard itemObj={favorite.product} />
          </section>
        ))}
      </div>
    </>
  );
}
