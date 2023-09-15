/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { getItems } from '../../utils/data/itemsData';
import ItemCard from '../../components/items/ItemCard';
import { useAuth } from '../../utils/context/authContext';
// import { useAuth } from '../../utils/context/authContext';

function ItemHome() {
  // const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const { user } = useAuth();
  const showProducts = () => {
    getItems(user.uid).then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  }, []);
  return (
    <>
      <div className="">
        <Form>
          <InputGroup className="my-3">
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Products" />
          </InputGroup>
        </Form>
        <div className="mt-5 d-flex flex-wrap">
          {products
            .filter((product) => (search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)))
            .map((product) => (
              <section key={`product--${product.id}`}>
                <ItemCard itemObj={product} onUpdate={showProducts} />
              </section>
            ))}
        </div>
      </div>
    </>
  );
}

export default ItemHome;
