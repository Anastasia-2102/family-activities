import useTable from './useTable.js'

function App() {
  const { data, error } = useTable("activities")
  console.log(data.length)
  
  return (
    <main>
      <h1>Family Activities</h1>
      <p>{error}</p>
      <p>{data.length} activities found</p>
      {data.map((activity) => (
        <p key={activity.id}>{activity.activity_name}</p>
      ))}

      <h2>Search</h2>

      <h2>Filters</h2>

      <h2>Add Activity</h2>

      <h2>Activities</h2>
    </main>
  )
}

export default App