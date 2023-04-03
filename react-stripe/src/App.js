import './index.css';
import { Route, Routes } from 'react-router-dom'
import Pay from './pages/Pay';
import Success from './pages/Success';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />}/>
      </Routes>
      
    </div>
  );
}

export default App;
