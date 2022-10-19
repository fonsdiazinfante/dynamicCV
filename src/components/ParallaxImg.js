import { Parallax } from 'react-parallax';


const ParallaxImg = (props) => (
    <Parallax className='image' blur={0} bgImage={props.img}bgImageAlt={props.img} strength={200}>
        <div className='content'>
            <span className='img-txt'>{props.text}</span>
        </div>
    </Parallax>
);

export default ParallaxImg;