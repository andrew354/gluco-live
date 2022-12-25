import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './features/Landing/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
