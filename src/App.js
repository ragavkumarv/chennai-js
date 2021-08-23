import "./App.css";

function App() {
  return <MeetCard />;
}

function MeetCard() {
  const content = {
    day: 20,
    month: "June",
    topic: "Masterclass J.Lemkin",
    from: "7:30PM",
    to: "10PM",
    venue: "Algolia Paris - Bridge",
    capacity: 200,
  };
  return (
    <div className="event-card">
      <div className="date">
        <p className="day">{content.day}</p>
        <p className="month">{content.month}</p>
      </div>
      <p className="topic">{content.topic}</p>
      <div className="event-details">
        <div className="time">
          <p className="from">{content.from}</p>
          <p className="spacer">--</p>
          <p className="to">{content.to}</p>
        </div>
        <p className="venue">
          @ {content.venue}
          <span className="capacity">({content.capacity})</span>
        </p>
      </div>
    </div>
  );
}
export default App;
