import "./App.css";

function App() {
  const content = {
    day: 20,
    month: "June",
    topic: "Masterclass J.Lemkin",
    from: "7:30PM",
    to: "10PM",
    venue: "Algolia Paris - Bridge",
    capacity: 200,
    speakerName: "Ragav Kumar V",
    speakerPic:
      "https://newadventuresconf.com/2020/assets/images/content/speaker-florence.png",
  };

  const contents = [
    {
      ...content,
      day: "08",
      topic: "Paris Start-up Innovation Summit",
      speakerName: "Abishek",
    },
    content,
  ];
  return (
    <div className="events">
      {contents.map((content) => (
        <MeetCard content={content} />
      ))}
    </div>
  );
}

function MeetCard({ content }) {
  return (
    <div className="event-card">
      <div className="top-info">
        <div className="date">
          <p className="day">{content.day}</p>
          <p className="month">{content.month}</p>
        </div>

        <div className="speaker-info">
          <img
            className="speaker-pic"
            src={content.speakerPic}
            alt="speaker profile"
          />
          <p className="speaker-name">{content.speakerName}</p>
        </div>
      </div>
      <p className="topic">{content.topic}</p>
      <div className="event-details">
        <div className="time">
          <p className="from">{content.from}</p>
          <p className="spacer">-</p>
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
