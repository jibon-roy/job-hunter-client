import { PropTypes } from "prop-types";
// import { useState } from "react";

const HandleBids = ({ data, serial }) => {

    console.log(data);

    // const [isDisabled, setIsDisabled] = useState(!data?.status)

    // const handleDisabled = () => {
    //     setIsDisabled(true);
    // }

    return (

        <tr className="hover  hover:text-primary-blue">
            <th>{serial + 1}</th>
            <td>{data?.jobTitle}</td>
            <td>{data?.email}</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>
                <button className="px-2 py-1 bg-primary-blue hover:bg-primary-blue-hover text-primary-white rounded-md">Accept</button>
                <button className="px-2 ml-2 py-1 bg-red hover:bg-red-hover text-primary-white rounded-md">Reject</button>
            </td>
        </tr>

    );
};

HandleBids.propTypes = {
    data: PropTypes.object,
    serial: PropTypes.number

}

export default HandleBids;