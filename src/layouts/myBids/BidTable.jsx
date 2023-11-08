import { PropTypes } from "prop-types";
import { useState } from "react";

const BidTable = ({ data, value }) => {

    const [isDisabled, setIsDisabled] = useState(!data?.status)

    const handleDisabled = () => {
        setIsDisabled(true);
    }

    return (
        <tr className="hover  hover:text-primary-blue">
            <th>{value + 1}</th>
            <td>{data?.title}</td>
            <td>{data?.employee}</td>
            <td>$ {data?.amount}</td>
            <td>{data?.deadline}</td>
            <td>{data?.status ? isDisabled ? <p className="text-green font-medium">Done!</p> : <p className="text-green font-medium">Complete</p> : <p className="text-red font-medium">Pending</p>}</td>
            <td><button disabled={isDisabled} onClick={handleDisabled} className={`${isDisabled ? 'bg-neutral-400 hover:bg-neutral-400' : ' hover:bg-primary-blue-hover bg-primary-blue'} px-2 py-1 text-primary-white rounded-md`}>Complete</button></td>
        </tr>
    );
};

BidTable.propTypes = {
    data: PropTypes.object,
    value: PropTypes.number

}

export default BidTable;