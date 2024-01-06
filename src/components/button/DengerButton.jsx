import { PropTypes } from "prop-types";

const DangerButton = ({ children }) => {
    return (
        <button type="submit" className="text-white btn normal-case hover:bg-red font-medium text-neutral-50 bg-red border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {children}
        </button>
    );
};
DangerButton.propTypes = {
    children: PropTypes.node
}

export default DangerButton;