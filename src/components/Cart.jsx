const Cart = () => {
//In JavaScript, && (AND) can be used in a way that evaluates the second part of the expression only if the first part is truthy. 
//        {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

const items = [
    {'id' : 1,
    'item': 'one'},
    {'id' : 2,
        'item': 'two'},
        {'id' : 3,
            'item': 'three'},
];
return (
    <div>
        <h1>My Cart 🛒</h1>
        {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

        {items.map(({item, id}) =>(
            <ul key={id}>
            <li>{item}</li>
            </ul>
            ))}
        </div>


)
}

export default Cart;