import { Route, Routes } from 'react-router-dom';
import Doces from './pages/Doces';
import Salgados from './pages/Salgados';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Doces />} />
      <Route path="/salgados" element={<Salgados />} />
    </Routes>
  );
}
