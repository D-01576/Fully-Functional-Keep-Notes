import { NavComponent } from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./Components/signin";
import { Home } from "./Components/home";
import { RecoilRoot } from "recoil";
import { SignUp } from "./Components/signup";
import { Menu } from "./Components/menu";
import { ShowTrash } from "./Components/showtrash";

function App() {
  if(window.location.href === "http://localhost:5173/signin" || window.location.href === "http://localhost:5173/signup"){
    return (
      <BrowserRouter>
      <RecoilRoot>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
      </RecoilRoot>
    </BrowserRouter>
    );
  }
  else{
  return (
    <BrowserRouter>
    <RecoilRoot>
        <div>
          <div>
            <NavComponent />
          </div>
          <div className="flex">
            <Menu />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/trash" element={<ShowTrash/>}/>
            </Routes>
          </div>
        </div>
    </RecoilRoot>
  </BrowserRouter>
  );
}
}

export default App;
