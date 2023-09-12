/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';

import { FaCartPlus } from 'react-icons/fa';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container fluid>
        <Link passHref href="/">
          <Navbar.Brand>
            <div className="nav-logo" />
            <div> Home</div>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/menu/menuPage">
              <Button className="menu-btn">Menu</Button>
            </Link>

            <Link passHref href="/orders">
              <Button className="past-orders-btn">Favorites</Button>
            </Link>

            <Link passHref href="/profile">
              <Button className="profile">Profile</Button>
            </Link>

            <Button className="logout-btn" onClick={signOut}>
              Logout
            </Button>

            <Link passHref href="/cart">
              <Button className="cart-btn">
                <FaCartPlus />
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
