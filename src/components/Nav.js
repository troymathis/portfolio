import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to ='/'>
                <div>
                    {/* image of logo */}
                </div>
            </Link>
            <Link to= '/projects'>
                <div>PROJECTS</div>
            </Link>
            <Link to ='/about'>
                <div>ABOUT</div>
            </Link>
            <Link to='/contact'>
                <div>CONTACT</div>
            </Link>
        </nav>
    )
}

export default Header;