import PrimaryButton from "../../components/button/PrimaryButton";
import { PropTypes } from "prop-types";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";


// style = {{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}
const Slider = ({ slider }) => {


    return (
        <div>
            <div className="hero -z-50 h-[90vh] lg:h-[80vh] " style={{ backgroundImage: `url(${slider?.backgroundImageURL})` }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-center">
                        <div className="flex justify-center">
                            <div className='block w-full'>
                                <span className="mx-2 text-7xl inline font-bold text-primary-white">Job Hunter</span>
                            </div>
                        </div>
                        <h1 className="mb-5 my-10 text-xl font-bold">
                            <TypeAnimation
                                sequence={[slider?.heading, 500, 'Ready for you', 500,]}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="mb-5 text-lg">{slider?.sliderText}</p>
                        <Link to='/jobs'> <PrimaryButton>Browse Jobs</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Slider.propTypes = {
    slider: PropTypes.object
}

export default Slider;