import React from 'react';
import { Form } from 'react-bootstrap';

// Component
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ComponentButton from '../../components/Button';

export default function FormSignin({ form, handleChange, handleSubmit, loading }) {
  return (
    <Form>
      <TextInputWithLabel label="Email Address" name="email" value={form.email} type="email" placeholder="Enter Email" onChange={handleChange} />
      <TextInputWithLabel label="Password" name="password" value={form.password} type="password" placeholder="Enter Password" onChange={handleChange} />

      <ComponentButton loading={loading} disabled={loading} variant="primary" onClick={handleSubmit}>
        Submit
      </ComponentButton>
    </Form>
  );
}
