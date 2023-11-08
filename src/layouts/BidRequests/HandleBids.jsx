import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";
// import { useState } from "react";

const HandleBids = ({ data, serial }) => {


    // const [isDisabled, setIsDisabled] = useState(!data?.status)

    // const handleDisabled = () => {
    //     setIsDisabled(true);
    // }
    const [isDisabled, setIsDisabled] = useState(data?.status)

    const handleAccept = () => {
        setIsDisabled(true);
        const accept = { status: true };
        axios.put(`/user/status?email=${data?.email}&jobId=${data?.jobId}`, accept)
            .then()
            .catch()
    }


    return (

        <tr className="hover  hover:text-primary-blue">
            <th>{serial + 1}</th>
            <td>{data?.title}</td>
            <td>{data?.email}</td>
            <td>{data?.deadline}</td>
            <td>{data?.status ? isDisabled ? <p className="text-green font-medium">Done!</p> : <p className="text-green font-medium">Complete</p> : <p className="text-red font-medium">Pending</p>}</td>
            <td>
                <button disabled={isDisabled} onClick={handleAccept} className={`${isDisabled ? 'bg-neutral-400 hover:bg-neutral-400' : ' hover:bg-primary-blue-hover bg-primary-blue'} px-2 py-1 text-primary-white rounded-md`}>Accept</button>
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