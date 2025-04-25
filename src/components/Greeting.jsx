const Greeting = () => {
    //const currentDate = Date();
    //an object of date 
    const date = new Date();
    const name = "John";
    //iteron me map
    //The key helps React know which items changed, added, or removed.Without a key, React gets confused and may update the wrong items.
    //the key is number
    const numbers = [1,2,3,4,5]

    const users = [
        {
        'id' : 1,
        'name' : 'Sara',
        'email' : 'saragallopeni@mail.com',
        'age': 24
        },
        {
            'id' : 2,
            'name' : 'Ameno',
            'email' : 'ameno@mail.com',
            'age': 23
            },
            {
                'id' : 3,
                'name' : 'Kleo',
                'email' : 'kleo@mail.com',
                'age': 26
                },

    ]
    //It generates a new random value every render → React thinks every list item is new each time.
    // Destroys optimization → React will re-render everything instead of just updating the changed parts.
    //even though with math random dont make that error
    //key={1} bad cause same for all the elements
    // {users.map(user => (
    //     <ul key={Math.random()}>
    //         <li>{user.name}</li>
    //     </ul>
    // ))}
    // {users.map( ({name, email, age}, index) => (
    //     <ul key={index}>
    //         <li>{name}</li>
    //         <li>{email}</li>
    //         <li>{age}</li>
    //     </ul>
    // ))}
    //You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
    //id:1

    return(
        <div>
    <h1>Welcome to our website</h1>
    <p>Date: {date.getDate()}</p>
    <p>Name: {name}</p>
    
    {numbers.map(number =>(
        <ul key={number}>
            <li>{number}</li>
        </ul>
    ))}

    <p>Another iteration</p>

    {users.map( ({id, name, email, age}) => (
        <ul key={id}>
            
            <li>{name}</li>
            <li>{email}</li>
            <li>{age}</li>

        </ul>
    ))}

    </div>
    
)};

export default Greeting;