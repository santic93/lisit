import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import People from './Components/People/People';
import Planets from './Components/Planets/Planets';
import Ships from './Components/Ships/Ships';
import Home from './Components/Home/Home';
import UseContext from './Components/Context/UseContext';
import DetailsPlanets from './Components/Details/DetailsPlanets';
import DetailsShips from './Components/Details/DetailsShips';
import DetailsPeople from './Components/Details/DetailsPeople';

function App() {
  return (
    <div className='App'>
      <UseContext>
        <Layout>
          <Routes>
            <Route path='/people' element={<People />} />
            <Route path='/planets' element={<Planets />} />
            <Route path='/vehicles' element={<Ships />} />
            <Route path='/' element={<Home />} />
            <Route path='/people/:id' element={<DetailsPeople />} />
            <Route path='/vehicles/:id' element={<DetailsShips />} />
            <Route path='/planets/:id' element={<DetailsPlanets />} />
          </Routes>
        </Layout>
      </UseContext>
    </div>
  );
}

export default App;
