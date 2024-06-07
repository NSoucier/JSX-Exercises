const App = () => (
    <div>
        <Tweet username="guest23" name="Anon" date="2 hours ago" message="heyooo!" />
        <Tweet username="starfish" name="Patrick" date="yesterday" message="Hello world!"/>
        <Tweet username="JJ" name="John" date="Last week" message="Welcome, everyone."/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));