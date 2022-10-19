import github from '../img/github-logo.jpeg';
import linkedin from '../img/linkedin.png';

const Intro = () => (
        <div className='text-box'>
            <p className="white-text"> Welcome to my dynamic resume.
            <br /> <br /> You can follow me on my socials or scrolling to know more about me.
            </p>
            <div className='container'>
                <img onClick={() => window.location.replace("https://github.com/fonsdiazinfante")} className='socialmedia-logo' alt="github" src={github}/>
                <img onClick={() => window.location.replace("https://www.linkedin.com/in/fons95/")}  className='socialmedia-logo' alt="linkedin" src={linkedin}/>
            </div>
        </div>
);

export default Intro;