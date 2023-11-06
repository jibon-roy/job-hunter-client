import { PropTypes } from "prop-types";


const PrimaryButton = ({ children }) => {
    return (

        <button type="submit" className="text-white btn normal-case hover:bg-primary-blue-hover font-medium text-neutral-50 bg-primary-blue border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded text-lg">
            {children}
        </button>

    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node
}

export default PrimaryButton;