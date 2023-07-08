
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { slider1 } from '../../public/img';

const Demo = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>

            <Carousel
                showDots={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}

            >
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider1} alt="" />
                </div>
            </Carousel>;
        </div>
    );
};

export default Demo;