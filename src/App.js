import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { privateRoutes } from './routes/PrivateRoutes';
import RequireAuth from "./authentication/RequireAuth";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {/* PUBLIC ROUTE */}
          {
            publicRoute.map(route => <Route path={route.path} element={<route.Component />} />)
          }
          {/* PRIVATE ROUTE */}
          <Route element={<RequireAuth />}>
            {
              privateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />))
            }
          </Route>
          {/* PRIVATE ADMIN ROUTE */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin />} />
              <Route path="add-service" element={<AddService />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
