function Activities( {data, error}) {
    return (
        <main>
            <h1>Family Activities</h1>
            <p>Explore activities for the whole family!</p>

            <p>{error}</p>
            <p>{data.length} activities found</p>

            {data.map((activity) => (
                <p key={activity.id}>{activity.activity_name}</p>
            ))}
        </main>
    )
}

export default Activities