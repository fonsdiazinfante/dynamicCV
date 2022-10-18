import { Parallax } from 'react-parallax';
import logo from '../img/logo1.jpg';

const ImgThree = () => (
    <Parallax className='image' blur={0} bgImage={logo}bgImageAlt="Alfonso" strength={800}>
        <div className='content'>
            <span className='img-txt'>Alfonso</span>
        </div>
    </Parallax>
);

export default ImgThree;