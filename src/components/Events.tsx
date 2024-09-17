const Events = () => {
  const events = [
    { title: "Tech Talk", date: "September 25, 2024", description: "Join our monthly tech talk on emerging technologies." },
    { title: "Coding Bootcamp", date: "October 10, 2024", description: "A hands-on coding bootcamp to sharpen your skills." },
    { title: "AI Workshop", date: "November 5, 2024", description: "Learn about AI and Machine Learning with experts." }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Upcoming Events</h2>
      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
