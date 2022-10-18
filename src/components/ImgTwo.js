import { Parallax } from 'react-parallax';
import books from '../img/books.jpeg';

const ImgTwo = () => (
    <Parallax className='image' blur={0} bgImage={books}bgImageAlt="Alfonso" strength={800}>
        <div className='content'>
            <span className='img-txt'>Alfonso</span>
        </div>
    </Parallax>
);

export default ImgTwo;