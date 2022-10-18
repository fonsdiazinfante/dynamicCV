import TEC from '../img/TEC.jpg';
import GBC from '../img/GBC.jpg';

const Education = () => (
        <div className='text-box'>
            <h3> George Brown College </h3>
            <p className='school-text'> January 2022 - August 2022</p>
            <img className='school-logo' alt="GBC logo" src={GBC}></img>
            <h3> Tec de Monterrey </h3>
            <p className='school-text'> August 2015 - July 2021</p>
            <img className='school-logo' alt="GBC logo" src={TEC}></img>
        </div>
);

export default Education;