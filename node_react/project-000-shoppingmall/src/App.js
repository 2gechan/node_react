import { Outlet } from "react-router-dom";
import MainNav from "./comps/MainNav";
import "./css/App.css";
import "./css/MainNav.css";
import "./css/join.css";
import "./css/productList.css";

import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <MainNav />
        </header>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
