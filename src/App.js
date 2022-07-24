import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
