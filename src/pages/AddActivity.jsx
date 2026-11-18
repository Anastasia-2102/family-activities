import { useState } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../utils/supabase'
function AddActivity({ reload }) {
    const navigate = useNavigate()
    const [activityName, setActivityName] = useState ('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()

        const { error } = await supabase
            .from('activities')
            .insert([
            {
                activity_name: activityName,
                location: location,
                price: price,
                date: date
            }
        ])

    if (error) {
        console.log(error)
    return
  }

    reload()
    navigate('/activities')
}
    return (
        <main>
            <h1>Add a Family Activity</h1>
            <p>Share a new activity for your family to enjoy!</p>
            <form onSubmit={handleSubmit}>
                <label>Activity Name:</label>
                <input
                    type="text"
                    value={activityName}
                    onChange={(event) => setActivityName(event.target.value)}
                />
                <label>Location:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label>Price:</label>
                <input 
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <button type="submit">Add Activity</button>
            </form>

        </main>
    )
}

export default AddActivity