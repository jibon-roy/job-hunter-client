import { PropTypes } from "prop-types";


const PrimaryButton = ({ children, width }) => {
    return (

        <button type="submit"
            className={`text-white btn normal-case hover:bg-primary-indigo-hover w-${width} font-medium text-neutral-50 bg-primary-indigo border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>
            {children}
        </button>

    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node
}

export default PrimaryButton;