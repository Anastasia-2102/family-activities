function Activities( {data, error}) {
    return (
        <main>
            <h1>Family Activities</h1>
            <p>Explore activities for the whole family!</p>

            <p>{error}</p>
            <p>{data.length} activities found</p>

            {data.map((activity) => (
                <div className="activity-card" key={activity.id}>
                    <h2>{activity.activity_name}</h2>
                    <p>Location: {activity.location}</p>
                    <p>Price: ${activity.price}</p>
                    <p>Date: {activity.date}</p>
                </div>
                
            ))}
        </main>
    )
}

export default Activities