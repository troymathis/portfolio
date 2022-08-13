import { Link } from 'react-scroll';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to ='about' className='links'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                <div>ABOUT</div>
            </Link>
            <Link to= 'lstack' className='links'
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}>
                <div>TECH STACK</div>
            </Link>
            <Link to= 'projects' className='links'
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}>
                <div>PROJECTS</div>
            </Link>
            <Link to='contact' className='links'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                <div>CONTACT</div>
            </Link>
        </nav>
    )
}

export default Header;