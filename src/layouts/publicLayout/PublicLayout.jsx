import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";


const PublicLayout = ({ children }) => {
    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <div className="w-full h-[90vh] flex justify-center items-center"><span className="loading flex loading-dots loading-lg"></span></div>
    }

    if (user) {
        return <Navigate to='/'></Navigate>
    } else {
        return children;
    }
};
PublicLayout.propTypes = {
    children: PropTypes.node
}

export default PublicLayout;