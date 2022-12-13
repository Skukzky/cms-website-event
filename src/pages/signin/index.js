import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import FormSignin from './form';

// Component
import ComponentAlert from '../../components/Alert';

// Utils
import { postData } from '../../utils/fetch';

// Redux
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';

function PageSignin() {
  const dispatch = useDispatch();

  // redirect halaman ketika login tidak bisa balik ke halaman input login
  // const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    message: '',
    variant: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await postData(
        `/cms/auth/signin`,
        form

        // CARA 2
        // {
        //   email: form.email,
        //   password: form.password,
        // }
      );
      // console.log(response.data.data.token);

      // localstorage nyimpan 2 item, yaitu key dan value
      // localStorage.setItem('token', response.data.data.token);
      dispatch(userLogin(response.data.data.token, response.data.data.role));
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data.msg);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? 'Internal Server Error',
        variant: 'danger',
      });
    }
  };

  // if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: '50%' }}>
        {alert.status && <ComponentAlert message={alert.message} variant={alert.variant} />}
      </div>
      <Card style={{ width: '50%' }} className="m-auto mt-5">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="text-center">Form Login</Card.Title>
          <FormSignin form={form} handleChange={handleChange} loading={loading} handleSubmit={handleSubmit} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
