/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth';
import { editUser } from '../utils/data/userData';

// eslint-disable-next-line no-unused-vars
function RegisterForm({ user, updateUser }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    uid: user.uid,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        uid: user.uid,
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        email: user.email || '',
        phoneNumber: user.phone_number || '',
        address: user.address || '',
        id: user.id,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      editUser(formData)
        .then(() => router.push('/profile'));
    } else {
      registerUser(formData).then(() => updateUser(user.uid));
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{
          height: 'auto',
          width: '60vh',
          padding: '30px',
          margin: '15vh auto',
          backgroundColor: '#79A7D3',
          textAlign: 'center',
          borderRadius: '20px',
        }}
      >
        <h3>Welcome! Please create an account to continue:</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label />
          <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="tel" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    phone_number: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    uid: PropTypes.string,
  }),
  updateUser: PropTypes.func.isRequired,
};
export default RegisterForm;
