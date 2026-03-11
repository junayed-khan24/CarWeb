
import video from '../assets/13035286_1920_1080_24fps.mp4';

const Hero2 = () => {

    
    return (
        <div >
            <video src={video} autoPlay muted loop className="w-full h-full object-cover"></video>
        </div>
    );
};

export default Hero2;