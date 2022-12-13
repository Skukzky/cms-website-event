import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Component
import ComponentBreadCrumb from '../../components/BreadCrumb';

export default function PageDashboard() {
  // const token = localStorage.getItem('token');

  // if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <Container className="mt-2">
        <ComponentBreadCrumb />

        <h1>Dashboard</h1>
        {/* <ComponentButton>Tambah</ComponentButton> */}

        {/* <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    </>
  );
}
