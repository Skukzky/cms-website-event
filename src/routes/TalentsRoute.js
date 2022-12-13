import { Route, Routes } from 'react-router-dom';

import PageTalents from '../pages/talents';
import Create from '../pages/talents/create';
import Edit from '../pages/talents/edit';

export default function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageTalents />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:talentId" element={<Edit />} />
    </Routes>
  );
}
