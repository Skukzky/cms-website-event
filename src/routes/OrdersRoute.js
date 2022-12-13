import { Route, Routes } from 'react-router-dom';

import PageOrders from '../pages/orders';

export default function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageOrders />} />
    </Routes>
  );
}
