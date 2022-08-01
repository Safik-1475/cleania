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

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(route => <Route path={route.path} element={<route.Component />} />)
          }
          <Route element={<RequireAuth />}>
            {
              privateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />))
            }
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
