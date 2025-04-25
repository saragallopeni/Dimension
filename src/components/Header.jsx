import "../styles/header.css";
import '../index.css';

const Header = () => {

    const font ={
        fontFamily: 'Wallpoet',
    }

    return( 
    <div className={"header"}>
    <div className={"logo"}>
    <h1 className={"title"} style={font}>React Project</h1>
    </div>
    <nav style={font}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    </div>        
    )    
}
export default Header;