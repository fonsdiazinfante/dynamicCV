import TEC from '../img/TEC.jpg';
import GBC from '../img/GBC.jpg';

const Education = () => (
        <div>
            <div class="grid-container">
                <div className="grid-item">George Brown College</div>
                <img className='school-logo' alt="GBC logo" src={GBC}></img>
                <span className="course-text">Postgraduate study on machine learning (Jan 2022 - Aug 2022)</span>
            </div>
            <div class="grid-container">
                <div className="grid-item">Tecnológico de Monterrey </div>
                <img className='school-logo' alt="Tec logo" src={TEC}></img>
                <span className="course-text">Bachelors Degree on computer science (Aug 2015 - Jul 2021)</span>
            </div>
        </div>
);

export default Education;