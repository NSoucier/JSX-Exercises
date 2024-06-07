const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Bart" />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));