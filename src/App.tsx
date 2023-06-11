import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PropertiesDetils from './pages/Details/PropertiesDetils';

export default function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<PropertiesDetils />} />
      </Routes>
    </Router>
  );
}