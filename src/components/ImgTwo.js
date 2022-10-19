import { Parallax } from 'react-parallax';
import bg_computer from '../img/bg_computer.jpeg';

const ImgTwo = () => (
    <Parallax className='image' blur={0} bgImage={bg_computer}bgImageAlt="Alfonso" strength={300}>
        <div className='content'>
            <span className='img-txt'>Skills</span>
        </div>
    </Parallax>
);

export default ImgTwo;