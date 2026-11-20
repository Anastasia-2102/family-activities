import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.jsx'
import Activities from './pages/Activities.jsx'
import AddActivity from './pages/AddActivity.jsx'
import useTable from './useTable.js'


function App() {
  // Get activities from Supabase and provide a function to reload them
  const { data, error, reload } = useTable("activities")
  
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
        element={ <Activities data={data} error={error} reload={reload} />}
      />
      <Route 
        path="/add-activity" 
        element={<AddActivity reload={reload} />} 
      />
    </Routes>
    </>
  )
}

export default App