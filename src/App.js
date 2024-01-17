import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from './pages/home/index';
import Learn from './pages/Learn/index';
import Blog from './pages/Blog/index';
import Community from './pages/Community/index';
import Reference from './pages/Reference/index';
import Practice from "./components/Practice";


// import s from './api';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/learn" element={<Learn/>}></Route>
      <Route path="/community" element={<Community/>}></Route>
      <Route path="/reference" element={<Reference/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Routes>
    <Practice/>
   </BrowserRouter>
   </>
  );
}
export default App;
