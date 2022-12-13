import { Route, Routes } from 'react-router-dom';

import PagePayments from '../pages/payments';
import Create from '../pages/payments/create';
import Edit from '../pages/payments/edit';

export default function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagePayments />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:paymentId" element={<Edit />} />
    </Routes>
  );
}
