import { useState } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../utils/supabase'
function AddActivity({ reload }) {
    const navigate = useNavigate()
    const [activityName, setActivityName] = useState ('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Handle form submission and save the new activity to Supabase
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

    // Display an error message if the activity cannot be saved
    if (error) {
        setError(error.message)
    return
}

    // Refresh the activity list and navigate to Activities page
    reload()
    navigate('/activities')
}
    return (
        <main className="add-activity-page">
            <h1>Add a Family Activity</h1>
            <p>Share a new activity for your family to enjoy!</p>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <form onSubmit={handleSubmit}>
                <label>Activity Name:</label>
                <input
                    type="text"
                    value={activityName}
                    onChange={(event) => setActivityName(event.target.value)}
                    required
                />
                <label>Location:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    required
                />
                <label>Price:</label>
                <input 
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                />
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                />
                <button type="submit">Add Activity</button>
            </form>

        </main>
    )
}

export default AddActivity