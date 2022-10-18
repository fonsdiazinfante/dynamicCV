import { Parallax } from 'react-parallax';
import school from '../img/school.jpeg';

const ImgThree = () => (
    <Parallax className='image' blur={1} bgImage={school}bgImageAlt="Alfonso" strength={300}>
        <div className='content'>
            <span className='img-txt'>Education</span>
        </div>
    </Parallax>
);

export default ImgThree;