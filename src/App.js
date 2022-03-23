import Header from './page/Header/Header';
import Main from './page/Main/Main';
import Footer from './page/Footer/Footer';
import Detail from './page/Detail/Detail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/> }/>
        <Route path='/caracter/:name' element={<Detail/> }/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
