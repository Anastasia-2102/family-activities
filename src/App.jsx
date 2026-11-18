import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.jsx'
import Activities from './pages/Activities.jsx'
import AddActivity from './pages/AddActivity.jsx'
import useTable from './useTable.js'


function App() {
  const { data, error } = useTable("activities")
  
  return (
    <>
    <nav>
      <NavLink to="/" end>Home</NavLink> {' | '}
      <NavLink to="/activities">Activities</NavLink> {' | '}
      <NavLink to="/add-activity">Add Activity</NavLink>
    </nav>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/activities" 
        element={ <Activities data={data} error={error} />}
      />
      <Route path="/add-activity" element={<AddActivity />} />
    </Routes>
    </>
  )
}

export default App