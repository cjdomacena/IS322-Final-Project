import Dashboard from "./pages/Dashboard";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { useAppSelector } from "./redux/hooks";
import Nav from "./components/Navbar/Nav";



function App() {

  const {isDarkMode} = useAppSelector(state => state.theme)

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
