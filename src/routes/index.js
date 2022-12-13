import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

import PageSignin from '../pages/signin';
import HomeRoute from './HomeRoute';
import TalentsRoute from './TalentsRoute';
import CategoriesRoute from './CategoriesRoute';
import ComponentNavbar from '../components/Navbar';
import PaymentsRoute from './PaymentsRoute';
import EventsRoute from './EventsRoute.js';
import OrdersRoute from './OrdersRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <PageSignin />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <ComponentNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        <Route path="events/*" element={<EventsRoute />} />
        <Route path="orders/*" element={<OrdersRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
