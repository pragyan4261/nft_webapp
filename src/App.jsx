import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import CreateYours from "./components/CreateYours"
import Explore from "./components/Explore"
import Items from "./components/ItemDetails"
import Author from "./components/Author"
import "./index.css";

const App = () => (

    <div>
      

    <BrowserRouter>
      <Routes>
        <Route path ="/" exact element = {<Home />}/>
        <Route path ="/create" element = {<CreateYours />}/>
        <Route path ="/explore" element = {<Explore />}/>
        <Route path ="/items" element = {<Items />}/>
        <Route path ="/author" element = {<Author />}/>
      </Routes>
    </BrowserRouter>

    </div>    
)


 

    
    
 

  

// function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//         <Link to="/about">About</Link>
//         <br />
//         <Link to="/contact">Contact Us</Link>
//       </div>
//     );
//   }
  
//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//         <Link to="/">Home</Link>
//         <br />
//         <Link to="/contact">Contact Us</Link>
//       </div>
//     );
//   }
  
//   function Contact() {
//     return (
//       <div>
//         <h2>Contact Us</h2>
//         <Link to="/">Home</Link>
//         <br />
//         <Link to="/about">About</Link>
//       </div>
//     );
//   }
  
//   function App() {
//     return (
//       <BrowserRouter>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </nav>
  
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
export default App;
