import { NavComponent } from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./Components/signin";
import { Home } from "./Components/home";
import { RecoilRoot } from "recoil";
import { Verify } from "./Components/Verify";
import { SignUp } from "./Components/signup";

function App() {
  return (
    <BrowserRouter>
    {/* <RecoilRoot>
      
    </RecoilRoot> */}
    {/* <Verify></Verify> */}
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<NavComponent />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
