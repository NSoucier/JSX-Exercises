const Tweet = ({username, name, date, message}) => (
    <div>
        <h3>"{message}"</h3>
        <h5>From: {username} ({name})</h5>
        <h5>Posted: {date}</h5>
    </div>
)