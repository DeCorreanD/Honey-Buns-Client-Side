import { clientCredentials } from '../client';

const getItems = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const favoriteItem = (itemId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${itemId}/favorite`, {
    method: 'POST',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const unfavoriteItem = (itemId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${itemId}/unfavorite`, {
    method: 'DELETE',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then(resolve)
    .catch(reject);
});
const getFavoriteProduct = async (userId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/favoriteitems?user=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};
const getFavoritedItems = (uid) => fetch(`${clientCredentials.databaseURL}/favoriteitems?user=${uid}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${uid}`,
  },
}).then((response) => response.json());

export {
  getItems, getSingleItem, favoriteItem, unfavoriteItem, getFavoriteProduct, getFavoritedItems,
};
