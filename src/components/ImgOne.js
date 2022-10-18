import { Parallax } from 'react-parallax';
import Alfonso from '../img/ISC.jpg';

const ImgOne = () => (
    <Parallax className='image' blur={0} bgImage={Alfonso}bgImageAlt="Alfonso" strength={600}>
        <div className='content'>
            <span className='img-txt'>Alfonso</span>
        </div>
    </Parallax>
);

export default ImgOne;