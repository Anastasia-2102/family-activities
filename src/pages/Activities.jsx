import { useState } from 'react'
import { supabase } from '../utils/supabase'

function Activities( {data, error, reload}) {
    const [searchTerm, setSearchTerm] = useState('')
    const deleteActivity = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this activity?"
        )
        if (!confirmed)
            return
        const {error} = await supabase
            .from('activities')
            .delete()
            .eq('id', id)
        if (error) {
            console.error(error)
            return

        }
        reload()
    }
    const filteredActivities = data.filter((activity) => 
        activity.activity_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <main className="activities-page">
            <h1>Family Activities</h1>
            <p>Explore activities for the whole family!</p>
            <input
                type="text"
                placeholder="Search by activity or location..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <p className="error-message">{error}</p>
            <p className="activities-count">
                {filteredActivities.length} activities found
            </p>

            {filteredActivities.map((activity) => (
                <div className="activity-card" key={activity.id}>
                    <h2>{activity.activity_name}</h2>
                    <p>Location: {activity.location}</p>
                    <p>Price: ${activity.price}</p>
                    <p>Date: {activity.date}</p>
                    <button
                        type="button"
                        onClick={() => deleteActivity(activity.id)}
                    >
                        Delete
                    </button>
                </div>
                
            ))}
        </main>
    )
}

export default Activities