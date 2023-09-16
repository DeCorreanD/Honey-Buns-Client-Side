/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaInfoCircle, FaCartPlus } from 'react-icons/fa'; // Import the "info-circle" icon

const ItemCard = ({ itemObj }) => {
  const router = useRouter();
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
            <img src={itemObj.image_url} alt="item" style={{ width: '18rem', height: 'auto' }} />
          </div>
          <br />
          <Card.Text>
            <>{itemObj.description}</>
          </Card.Text>
          <Card.Text>
            <>Price: ${itemObj.price}</>
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
    image_url: PropTypes.string,
    favorited: PropTypes.bool,
  }).isRequired,
};

export default ItemCard;
