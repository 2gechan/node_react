import "./App.css";
import Header from "./comps/title";
import Main from "./comps/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./comps/page1";
import Page2 from "./comps/page2";
import NavList from "./comps/NavList";
function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
