import github from '../img/github-logo.jpeg';
import linkedin from '../img/linkedin.png';

const Intro = () => (
        <div className='text-box'>
            <p className="white-text"> Computer Science major with a year of co-op experience seeking to leverage my experience in Software Design, React, Node, Ionic, Express, HTML, SQL, Javascript, C, C#, C++, Python and Java. 
Highly motivated leader who is passionate about the future of computer technology and is looking forward to learn more about the Software Development Life Cycle and the engineering behind REST API's, Back end development and Testing automation.
            </p>
            <div className='container'>
                <img onClick={() => window.location.replace("https://github.com/fonsdiazinfante")} className='socialmedia-logo' alt="github" src={github}/>
                <img onClick={() => window.location.replace("https://www.linkedin.com/in/fons95/")}  className='socialmedia-logo' alt="linkedin" src={linkedin}/>
            </div>
        </div>
);

export default Intro;