import { Route, Routes } from 'react-router-dom';

// Pages
import PageDashboard from '../pages/dashboard';

export default function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageDashboard />} />
    </Routes>
  );
}
