import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h2 className='working'>I'm working on...</h2>
            <hr />
        <div className='projects'>
            <div className= 'project'>
                <h4>Meleauxdy</h4>
                <p>
                    a music search engine that can provide information on 
                    any artist by pulling their discography and listing the number of 
                    tracks along with the release date. Instantly find any artist 
                    within the iTunes library based off their name/primary genre
                </p>
                <a href=""></a>
            </div>
            <div className= 'project'>
                <h4>Fantasy Silk</h4>
                <p>
                a full CRUD application, user guided hub for everything fantasy 
                football with player and team creation and updating. (Also deployed to
                Microsoft Azure)
                </p>
                <a href=""></a>
            </div>
            <div className= 'project'>
                <h4>General Store</h4>
                <p>
                Front-End Lead for a full CRUD pseudo-commerce website that 
                helps customers find items they didn't even know they wanted or 
                eeded. With Firebase logins and website account creation 
                (admin capabilities to perform CRUD on products).
                </p>
                <a href=""></a>
            </div>
            <div className= 'project'>
                <h4>Communal WebRoom</h4>
                <p>
                a social media web app that brings online users together through 
                shared interests, allowing them to find connections outside the 
                platform
                </p>
                <a href=""></a>
            </div>
        </div>
        </div>
    )
}

export default Projects