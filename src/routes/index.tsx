// src/routes/index.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from '../layouts/Navbar';
import Home from '../layouts/home/Home';

const AppRoutes = () => (
    <div className="w-full relative overflow-hidden min-h-screen "> {/* Tambahkan min-h-screen agar content tetap penuh */}
        <Router>
            <div className="relative max-w-screen-xl mx-auto">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    {/* Tambahkan rute lainnya sesuai kebutuhan */}
                </Route>
            </Routes>
        </Router>
    </div>
);

export default AppRoutes;
