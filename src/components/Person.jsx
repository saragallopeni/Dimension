
const Person = ({name, age}) => {
    return(
        <div>
            <h1>Name: {name}</h1>
            <p> Age: {age}</p>
        </div>
    )
}

const RenderAll = (props) => {
    return <div>{props.children}</div>
}

//export default exports one value
export {Person, RenderAll};
