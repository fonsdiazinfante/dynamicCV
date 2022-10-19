import TEC from '../img/TEC.jpg';
import GBC from '../img/GBC.jpg';

const Education = () => (
        // <div className='text-box'>
        //     <h3> George Brown College </h3>
        //     <p className='school-text'> January 2022 - August 2022</p>
        //     <img className='school-logo' alt="GBC logo" src={GBC}></img>
        //     <br />
        //     <p className='school-text'> Post Graduate study on Machine Learning</p>
        //     <h3> Tec de Monterrey </h3>
        //     <p className='school-text'> August 2015 - July 2021</p>
        //     <img className='school-logo' alt="Tec logo" src={TEC}></img>
        //     <br />
        //     <p className='school-text'>Bachelors Degree in Computer Science</p>
        // </div>
        <div>
            <div class="grid-container">
                <div class="grid-item">George Brown College</div>
                <img className='school-logo' alt="GBC logo" src={GBC}></img>
                <span>Postgraduate study on machine learning (Jan 2022 - Aug 2022)</span>
            </div>
            <div class="grid-container">
                <div class="grid-item">Tecnológico de Monterrey </div>
                <img className='school-logo' alt="Tec logo" src={TEC}></img>
                <span>Bachelors Degree on computer science (Aug 2015 - Jul 2021)</span>
            </div>
        </div>
);

export default Education;