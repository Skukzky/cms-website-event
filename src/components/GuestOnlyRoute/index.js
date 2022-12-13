import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

export default function GuestOnlyRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  // console.log(children);

  if (token) return <Navigate to="/" replace={true} />;

  return children || <Outlet />;
}
