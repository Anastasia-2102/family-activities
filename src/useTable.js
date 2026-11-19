import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

function useTable(table) {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [version, setVersion] = useState(0)

  // Fetch data from the Supabase table when the table or version changes
  useEffect(() => {
    const load = async () => {
      const result = await supabase.from(table).select()
      if (result.error) {
        setError(result.error.message)
        return
      }
      setData(result.data)
    }
    load()
  }, [table, version])

  // Reload the data by changing the version
  const reload = () => {
    setVersion(version + 1)
  }

  return { data, error, reload }
}

export default useTable