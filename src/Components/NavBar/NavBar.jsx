import './NavBar.css'
import logo from '../../assets/Name-logo.png'
function NavBar() {
    return (
        <>
            <div className='navBar-item'>
                <img src={logo} alt="Logo_Name" className='img-Bar' />
                <ul className='nav-menuBar'>
                    <li><a href="#home">Home</a> </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a> </li>
                    <li><a href="#experience">Experiences</a> </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='nav-content'>
                    <a href="#contact">Connect With Me</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;