const Person = ({name, age, hobbies}) => (    
    <p>
        Learn some information about this person.
        <h3>{name.length > 8 ? name.slice(0,6) : name }</h3>
        <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
        <h5>Hobbies:</h5>
        <ul>{hobbies.map(h => <li>h</li>)}</ul>

    </p>
)