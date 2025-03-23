import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            task <span>tracking</span> app <br />
          </h1>
          <p>
            A simple Task Tracking App. <br /> Inspired by John Smilga (udemy -
            <a href="https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/">
              jobify Project
            </a>
            ).
          </p>

          <p>MERN Stack TEKO Project by Michel Rodriguez</p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="task hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
