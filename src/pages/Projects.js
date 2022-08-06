import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2 className="working">I'm working on...</h2>
      <hr />
      <div className="projects">
        <div className="project">
          <h3 className="p-name">Meleauxdy</h3>
          <p className="p-desc">
            a music search engine that can provide information on any artist by
            pulling their discography and listing the number of tracks along
            with the release date. Instantly find any artist within the iTunes
            library based off their name/primary genre
          </p>
          <div className="p-tech">
            <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png" />
            <img src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?ssl=1" />
            <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" />
            <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" />
          </div>
          <div className="plinks-cont">
            <h3 id='goto'>Go to...</h3>
            <a
              href="https://meleauxdy.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="plinks"
            >
              Site
            </a>
            <a
              href="https://github.com/troymathis/meleauxdy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/MM95rZT.png" className="imgs" />
            </a>
          </div>
          <div className="p-mac">
            <img src="https://i.imgur.com/6HlNzru.png" />
          </div>
        </div>
        <div className="project">
          <h3 className="p-name">Fantasy Silk</h3>
          <p className="p-desc">
            a full CRUD application, user guided hub for everything fantasy
            football with player and team creation and updating. Form the
            ultimate team for the upcoming season!
          </p>
          <div className="p-tech">
            <img src="https://www.seekpng.com/png/full/383-3838960_mongodb-png.png" />
            <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" />
            <img src="https://res.cloudinary.com/kirankumargonti/image/upload/v1600929124/Kirankumargonti/assets/expressjs_a0log3.png" />
            <img src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?ssl=1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
            <img src="https://iconape.com/wp-content/files/xn/371066/svg/371066.svg" />
            <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" />
          </div>
          <div className="plinks-cont">
            <h3>Go to...</h3>
            <a
              href="https://fantasy-silk.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="plinks"
            >
              Site
            </a>
            <a
              href="https://github.com/troymathis/FantasySilk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/MM95rZT.png" className="imgs" />
            </a>
          </div>
          <div className="p-mac">
            <img src="https://i.imgur.com/53DLSop.png" />
          </div>
        </div>
        <div className="project">
          <h3 className="p-name">General Store</h3>
          <p className="p-desc">
            Front-End Lead for a full CRUD pseudo-commerce website that helps
            customers find items they didn't even know they wanted or eeded.
            With Firebase logins and website account creation (admin
            capabilities to perform CRUD on products).
          </p>
          <div className="p-tech">
            <img src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?ssl=1" />
            <img src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-standard.png" />
            <img src="https://www.seekpng.com/png/full/383-3838960_mongodb-png.png" />
            <img src="https://ivazz.com/wp-content/uploads/2021/05/sass-1.png" />
            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" />
            <img src="https://res.cloudinary.com/kirankumargonti/image/upload/v1600929124/Kirankumargonti/assets/expressjs_a0log3.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/2560px-Netlify_logo.svg.png" />
          </div>
          <div className="plinks-cont">
            <h3>Go to...</h3>
            <a
              href="https://generalstoregs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="plinks"
            >
              Site
            </a>
            <a
              href="https://github.com/troymathis/generalstore-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/MM95rZT.png" className="imgs" />
            </a>
          </div>
          <div className="p-mac">
            <img src="https://i.imgur.com/hDoPfgq.png" />
          </div>
        </div>
        <div className="project">
          <h3 className="p-name">Communal WebRoom</h3>
          <p className="p-desc">
            a social media web app that brings online users together through
            shared interests, allowing them to find connections outside the
            platform
          </p>
          <div className="p-tech">
            <img src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" />
            <img src="https://webme.ie/wp-content/uploads/2019/08/How-to-run-a-python-django-app-in-docker.png" />
            <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" />
            <img src="http://assets.stickpng.com/images/62cdcc97e106734e1ce200a9.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1024px-Microsoft_Azure_Logo.svg.png" />
          </div>
          <div className="plinks-cont">
            <h3>Go to...</h3>
            <a
              href="https://comm-w-r.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="plinks"
            >
              Site
            </a>
            <a
              href="https://github.com/troymathis/comm-wr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/MM95rZT.png" className="imgs" />
            </a>
          </div>
          <div className="p-mac">
            <img src="https://i.imgur.com/Lh7cuyr.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
