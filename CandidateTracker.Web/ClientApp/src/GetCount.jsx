import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CandidateCountContext = createContext();

const CandidateCountContextComponent = (props) => {

    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [deniedCount, setDeniedCount] = useState(0);

    const getPendingCount = async () => {
        const { data } = await axios.get('/api/CandidateTracker/getPendingCount');
        setPendingCount(data.count);
    }
    const getConfirmedCount = async () => {
        const { data } = await axios.get('/api/CandidateTracker/getConfirmedCount');
        setConfirmedCount(data.count);
    }
    const getDeniedCount = async () => {
        const { data } = await axios.get('/api/CandidateTracker/getDeniedCount');
        setDeniedCount(data.count);
    }
    useEffect(() => {
        getPendingCount();
        getConfirmedCount();
        getDeniedCount();
    }, []);

    const contextValues = {
        pendingCount,
        getPendingCount,
        confirmedCount,
        getConfirmedCount,
        deniedCount,
        getDeniedCount
    };
    return (
        <CandidateCountContext.Provider value={contextValues}>
            {props.children}
        </CandidateCountContext.Provider>
    )
}

const useCandidateCounts = () => {
    return useContext(CandidateCountContext);
}

export default CandidateCountContextComponent
export { useCandidateCounts };

