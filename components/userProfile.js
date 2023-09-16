/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getSingleUser, deleteUser } from '../utils/data/userData';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({});

  const deleteProfile = () => {
    if (window.confirm('Are you sure you would like to delete your profile? You cannot undo this action.')) {
      deleteUser(user.id).then(() => signOut());
      router.push('/');
    }
  };

  const getTheSingleUser = () => {
    getSingleUser(user.id).then(setUserDetails);
  };
  console.warn(userDetails);

  useEffect(() => {
    document.title = 'Honey Buns';
    getTheSingleUser(user.id);
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="profile-font" style={{ marginTop: '35px' }}>
        <h1 className="post-details-title">
          {' '}
          Full Name:
          {userDetails.first_name} {userDetails.last_name}
        </h1>
        <h4 className="post-details-title">Email: {userDetails.email}</h4>
        <h4 className="post-details-title">Address: {userDetails.address}</h4>
        <h4 className="post-details-text">
          Phone Number: <em>{userDetails.phone_number}</em>{' '}
        </h4>
        <Button
          className="profile-btn"
          variant="outline-dark"
          onClick={() => {
            router.push(`/user/edit/${userDetails.id}`);
          }}
        >
          Edit Profile
        </Button>
        <Button variant="outline-dark" className="profile-btn" style={{ marginLeft: 5 }} onClick={deleteProfile}>
          {' '}
          Delete Profile
        </Button>
      </div>
    </>
  );
}
