const GreetingExercise = ({timeOdfDay}) =>{
    if(timeOdfDay.toLowerCase() === "morning"){
        return <p>Good Morning</p>
    }else if(timeOdfDay.toLowerCase() === "afternoon"){
        return <p>"Good Afternoon"</p>
    }
}

export default GreetingExercise;
