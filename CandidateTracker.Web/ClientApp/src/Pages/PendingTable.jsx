import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";



const PendingTable = () => {
    const { id } = useParams();

    const [candidates, setCandidates] = useState([]);
   


    const getCandidate = async () => {
        const { data } = await axios.get(`/api/CandidateTracker/GetPending`);
        setCandidates(data);
    }

    useEffect(() => {
        getCandidate();
    }, []);

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>
                            View Details
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th
                        ></tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                    
                    return    <tr key={c.id}>
                            <td><Link to={`/viewdetails/${c.id}`}>View Details</Link></td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                        </tr>

                    })}
                </tbody>
            </table>

        </div>
    )
}
export default PendingTable;



