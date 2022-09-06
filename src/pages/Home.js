const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h3>Hey y'all! my name is..</h3>
        <h1 id='name'>Troy Mathis</h1>
      </div>
      <ul className="f-list">
        <h2>
          <li>
            I'm a Software Engineer / Web Developer based out of Houston, TX!
          </li>
        </h2>
        <h2>
          <li>
            I enjoy finding creative solutions while writing practical and
            elegant code.
          </li>
        </h2>
        <h2>
          <li>
            Thoughts, questions or oppurtunities? <a>Reach out!</a>
          </li>
        </h2>
      </ul>
      <div className="thanks">
        <h4>Thanks for taking a look!</h4>
        <p className='footer'>Built & Designed by Troy Mathis</p>
      </div>
    </div>
  );
};

export default Home;
