import App from '@/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default AppRoutes;