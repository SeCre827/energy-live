import { Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import ExtendPlan from './pages/ExtendPlan';
import About from './pages/About';
import Plans from './pages/Plans';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/welcome' />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/main' element={<Main />} />
        <Route path='/extend-plan' element={<ExtendPlan />} />
        <Route path='/about' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
