import { BrowserRouter, Route, Routes , Link} from "react-router-dom";

import Main from "./views/Main";
import LebensLauf from "./views/lebenslauf";
import Skills from "./views/skills";
import  Info from "./views/info";
import NotFound from "./views/Notfound";


import "./App.css";

const path = window.location.pathname;

function App() {
    return (
        <div className="App">
      
          
            <BrowserRouter>
            <div className="nav">  
            <Link to="/skills">Skills</Link>---
            <Link to="/info">info</Link>---
            <Link to ="/lebenslauf">lebensLauf</Link>---
            <Link to ="/skills">skills</Link>---
            <Link to ="/Main">Main</Link>---
            </div>
                <Routes>
                    <Route path="/lebensLauf" element={<LebensLauf />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/Main" element={<Main />} />
                    <Route exact path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />}  />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
