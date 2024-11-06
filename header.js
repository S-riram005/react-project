import computer from "../images/computer.jpg"

const Header = () => {
    return (
        <header>
            <div className="content">
                <div className="text-content">
                    <h5>This is my text you<span> You Should Have </span></h5>
                    <h1>The Future<br/>of<span>UI UX</span><br/>design</h1>
                    <p>lorem ipsum is the text of website</p>
                </div>
                <div className="image-content">
                    <img src={computer} alt="computer"></img>
                    

                </div>
            </div>

            
            
        </header>
    );
}

export default Header;
