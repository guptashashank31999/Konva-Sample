import "./App.css";
import Login from "./Component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import '@coreui/coreui/dist/css/coreui.min.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateComponent from "./Component/PrivateComponent";
import DefaultPage from "./Component/DefaultPage";

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DefaultPage />} />
          
          <Route element={<PrivateComponent />}>
            <Route
              path="/datas"
              element={
                <>
                  <NavbarComponent />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
