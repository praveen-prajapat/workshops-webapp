import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    
    </Parallax>
);

export default ImageTwo