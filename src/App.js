import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';
import Home from "./Components/home";
import profile from "./Components/profile";
import "./App.css";
import {BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import LoginForm from "./Components/login";
import YourComponent from "./Components/in-Play";
import PersonalInfoTable from "./Components/profile";
import Statement from "./Components/statement";
import Games from "./Components/games";
import ChangePassword from "./Components/change-password";
import MyLedger from "./Components/my-ledger";
import Rules from "./Components/rules";
import CompletedGames from "./Components/completed-games";
import HomePage from './Components/home'; 
import Match from './Components/match';   





function App() {
  return (
    
      <BrowserRouter>
             <section className="header">
        <div className="container bg_new">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="logo">
              <Link to="./home">   <img src="./image/logo.png" alt="logo" width="100%" /></Link>
             
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="logoout">
                <button>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profilenmae">
                <div className="name-tx"><span>Vikas</span></div>
                <div className="name-tx"><span>Chips</span></div>
                <div className="name-tx"><span>Expor</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/in-Play" element={<YourComponent />} />
          <Route path="/profile" element={<PersonalInfoTable />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/games" element={<Games />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/my-ledger" element={<MyLedger />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/completed-games" element={<CompletedGames />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/match" element={<Match />} />

        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
