import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCandidateCounts } from '../GetCount'


const ViewDetails = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState();
    
    const navigate = useNavigate();
    const { getDeniedCount, getConfirmedCount,getPendingCount} = useCandidateCounts();


    const getCandidate = async () => {
        const { data } = await axios.get(`/api/Candidatetracker/getbyId?id=${id}`);

        setCandidate(data);
      
    }


    useEffect(() => {
        getCandidate();
    }, []);

    if (!candidate) {
        return <h1>Loading....</h1>
    }
    
    const onDenied = async () => {

        await axios.post('/api/candidateTracker/updatedeniedStatus', candidate);
        getDeniedCount()
        getPendingCount();
        navigate('/PendingTable')
        
  
    }
    const onConfirmed = async () => {
        await axios.post('/api/candidateTracker/updateConfirmedStatus', candidate);
        getConfirmedCount();
        getPendingCount();
        navigate('/PendingTable')
        
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: "30rem", backgroundColor: "#f8f9fa" }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">Name: {candidate.firstName} {candidate.lastName}</h3>
                    <p className="card-text fs-5">Email: {candidate.email}</p>
                    <p className="card-text fs-5">Phone Number: {candidate.phone}</p>
                    <p className="card-text fs-5">Status: {candidate.status}</p>
                    <p className="card-text fs-5">Notes: {candidate.notes || 'N/A'}</p>
                   
                </div>
                <div>
                    <button onClick={onConfirmed} className="btn btn-primary">Confirm</button>
                    <button onClick={onDenied} className="btn btn-danger">Denied</button>
                </div>
            </div>
        </div>
    )

}
export default ViewDetails;