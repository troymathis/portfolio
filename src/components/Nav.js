import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to ='/portfolio'>
                <div>
                    <img src="https://i.imgur.com/aRtThMr.png" className='logo'/>
                </div>
            </Link>
            <Link to= '/projects' className='links'>
                <div>PROJECTS</div>
            </Link>
            <Link to ='/about' className='links'>
                <div>ABOUT</div>
            </Link>
            <Link to='/contact' className='links'>
                <div>CONTACT</div>
            </Link>
        </nav>
    )
}

export default Header;