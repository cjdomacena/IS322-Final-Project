import Dashboard from "./pages/Dashboard";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { useAppDispatch } from "./redux/hooks";
import Nav from "./components/Navbar/Nav";
import { useEffect } from "react";
import { initialAccount } from "./redux/AccountSlice";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";



function App() {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <div className="App min-h-screen w-screen dark:bg-[#0c0c0c] transition-colors flex">
        <Navbar />
        <div className="flex-grow">
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/:id" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
