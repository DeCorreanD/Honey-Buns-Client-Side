/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaInfoCircle, FaCartPlus } from 'react-icons/fa'; // Import the "info-circle" icon
import { favoriteItem, unfavoriteItem } from '../../utils/data/itemsData';
import { useAuth } from '../../utils/context/authContext';

const ItemCard = ({ itemObj, onUpdate }) => {
  const { user } = useAuth();
  const router = useRouter();
  const favorite = () => {
    favoriteItem(itemObj.id, user.uid).then(() => onUpdate());
  };
  const unfavorite = () => {
    unfavoriteItem(itemObj.id, user.uid).then(() => onUpdate());
  };
  return (
    <>
      <Card
        className="product-card"
        style={{
          width: '22rem',
          height: 'auto',
          margin: '30px',
          padding: '20px',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'flex',
        }}
      >
        <Card.Header>
          <h1>{itemObj.name}</h1>
        </Card.Header>
        <Card.Body>
          <div>
            <img src={itemObj.image} alt="item" style={{ width: '18rem', height: 'auto' }} />
          </div>
          <br />
          <Card.Text>
            <h5>{itemObj.description}</h5>
          </Card.Text>
          <Card.Text>
            <h4>Price: ${itemObj.price}</h4>
          </Card.Text>
        </Card.Body>
        <Button
          variant="warning"
          onClick={() => {
            router.push(`/items/${itemObj.id}`);
          }}
        >
          <FaInfoCircle style={{ marginRight: '5px' }} /> {/* Details icon */}
          Details
        </Button>
        <Button
          variant="danger" // Choose a color that suits your design
          onClick={() => {
            router.push(`/orderitems/new/${itemObj.id}`);
          }}
          style={{ marginTop: '10px' }}
        >
          <FaCartPlus style={{ marginRight: '5px' }} /> {/* Add to Cart icon */}
          Add to Cart
        </Button>
        {itemObj.favorited ? <Button onClick={unfavorite}>unfavorite</Button> : <Button onClick={favorite}>favorite</Button>}
      </Card>
    </>
  );
};
ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    favorited: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};

export default ItemCard;
