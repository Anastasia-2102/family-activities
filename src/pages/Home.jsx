import { Link } from 'react-router'
function Home() {
    return (
        <main className="home-page">
            <section className="hero">
                <img 
                    src="/images/city-park.jpg"
                    alt="Beautiful City Park in New Orleans"
                    className="hero-image"
                />
                <h1>Make Family Memories in New Orleans!</h1>
                <p>Discover fun places, exciting activities, and special moments to enjoy with your family.</p>
                <Link to="/activities" className="explore-button">
                    Explore Activities
                </Link>
            </section>
            <section className="activity-ideas">
                <div className="idea-card">
                    <h2>Outdoor Adventures</h2>
                    <p>Enjoy nature and outdoor fun with your family.</p>
                </div>

                <div className="idea-card">
                    <h2>Family Attractions</h2>
                    <p>Discover exciting places to visit together.</p>
                </div>

                <div className="idea-card">
                    <h2>Creative Activities</h2>
                    <p>Explore fun and creative experiences.</p>
                </div>
            </section>
        </main>
    )
}

export default Home