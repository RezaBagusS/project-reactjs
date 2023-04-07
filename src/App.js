
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Header from './components/header';
// import Kelas from './components/kelas';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  // const [getDesc,setDesc] = useState("Halo ini deskripsi default");

  // const changeBTN = () => {
  //   setDesc("Berikut link wa grup : wa.me/ghy3331fs");
  // }

  return (
    // <div>
    //     <Header name="Reza Bagus" list="1" newDesc={getDesc}/>
    //     <button onClick={changeBTN}>Click Me !!</button>
    //     <Kelas />
    // </div>
    // <h1>
    //   hallo 
    // </h1>

    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );

}

export default App;

{/* <Header name="Reza Bagus" list="1"/>
<Header name="Jokowi JK" list="2"/> */}