import Dashboard from "./pages/Dashboard";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Nav from "./components/Navbar/Nav";
import { useEffect, useState } from "react";
import { initialAccount } from "./redux/AccountSlice";



function App() {

  const {isDarkMode} = useAppSelector(state => state.theme);
  const {user} = useAppSelector(state => state.accounts)
  const dispatch = useAppDispatch();

  async function setUserAccounts() {
    try {
      const req = await fetch(
        'https://my-json-server.typicode.com/cjdomacena/IS322-Final-Project/user',
      );
      const res = await req.json();
      dispatch(initialAccount(res))
    }
     catch(e:any) {
        console.error(e.message || e.description)
     }
  }

  useEffect(() => {
    setUserAccounts();
  }, [dispatch]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="App min-h-screen w-screen dark:bg-[#0c0c0c] transition-colors flex">
        <Navbar />
        <div className="flex-grow">
          <Nav/>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
