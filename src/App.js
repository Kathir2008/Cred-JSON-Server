
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
import ForManager from './components/ForManager';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/user' element={<List/>}></Route>
        <Route path='/staff' element={<ForManager/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/info/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
