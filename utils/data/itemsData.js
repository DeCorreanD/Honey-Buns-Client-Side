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

export {
  getItems, getSingleItem, favoriteItem, unfavoriteItem,
};
