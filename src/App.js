import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Design from './pages/Design';
import Webart from './pages/Webart';
import Essay from './Posts/Essay';
import PrepWork from './Posts/PrepWork';
import Rationale from './Posts/Rationale';
import IndieReflection from './Posts/IndieReflection';
import IndieResearch from './Posts/IndieResearch';
import WframesSguides from './Posts/WframesSguides';
import Reflections from './Posts/Reflections';
import Changes from './Posts/Changes';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/Design' element={<Design/>}/>
      <Route path='/Webart' element={<Webart/>}/>
      <Route path='/Essay' element={<Essay/>}/>
      <Route path='/PrepWork' element={<PrepWork/>}/>
      <Route path='/Rationale' element={<Rationale/>}/>
      <Route path='/IndieReflection' element={<IndieReflection/>}/>
      <Route path='/IndieResearch' element={<IndieResearch/>}/>
      <Route path='/WframesSguides' element={<WframesSguides/>}/>
      <Route path='/Reflections' element={<Reflections/>}/>
      <Route path='/Changes' element={<Changes/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
