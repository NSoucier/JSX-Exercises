const App = () => (
    <div>
        <Person name="Harry" age="80" hobbies={["going for walks", "watching TV", "sleep"]} />
        <Person name="Benedicto" age="8" hobbies={["soccer", "LEGO"]} />
        <Person name="Rose" age="15" hobbies={["going to the movies", "Beach", "swimming"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));