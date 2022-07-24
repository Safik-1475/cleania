import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';

function App() {
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
