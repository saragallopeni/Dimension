const Weather = ({temperature}) => {
// if(temperature < 15){
//     return <p>It's cold outside!</p>
// }
// else if(temperature >= 15 || temperature <= 25 ){
//     return <p>It's nice outside!</p>
// }
// else if(temperature > 25){
//     return <p>It's hot outside!</p>
// }


return (
    <p>
        {temperature < 15 ? "It's cold outside!" : temperature <= 25 ? "It's nice outside!" :  "It's hot outside!"}
    </p>
)

}

export default Weather;