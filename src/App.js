import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { privateRoutes } from './routes/PrivateRoutes';
import RequireAuth from "./authentication/RequireAuth";

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
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
