import Dashboard from "./pages/Dashboard";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { useAppSelector } from "./redux/hooks";



function App() {

  const {isDarkMode} = useAppSelector(state => state.theme)

  return (

      <div className={isDarkMode ? 'dark' : ''}>
        <div className="App min-h-screen w-screen dark:bg-[#0c0c0c] flex transition-colors">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
