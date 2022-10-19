import { Parallax } from 'react-parallax';
import Alfonso from '../img/ISC.jpeg';

const ImgOne = () => (
    <Parallax className='image' blur={0} bgImage={Alfonso}bgImageAlt="Alfonso" strength={300}>
        <div className='content'>
            <span className='img-txt'>Alfonso Díaz-Infante Camarena</span>
        </div>
    </Parallax>
);

export default ImgOne;