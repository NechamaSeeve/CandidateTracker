import React, { useState, useEffect } from 'react';
import Row from '../components/ConfirmedRow'
import axios from 'axios'


const DeniedTable = () => {


    const [candidates, setCanditates] = useState();
    const [showNotes, setShowNotes] = useState();

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/CandidateTracker/getDenied`);
            setCanditates(data);
            
        }

        getCandidates();
    }, []);
    if (!candidates) {
        return (<h1>Loading....</h1>)
    }
    const toggleNotes = () => {
        setShowNotes((showNotes) => !showNotes);
    };

    return (
        <div className="container" style={{ marginTop: '80px' }} >
            <div>

                <div>
                    <button className="btn btn-success" onClick={toggleNotes}>Toggle Notes</button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {!!showNotes && < th > Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(c => <Row candidate={c} key={c.id} showNotes={showNotes} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default DeniedTable;


