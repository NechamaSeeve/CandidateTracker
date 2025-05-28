import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddCandidate = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhoneNumber] = useState()
    const [notes, setNotes] = useState()

     
   
    const onSubmit = async () => {

            await axios.post('api/candidatetracker/addcandidate', {
                firstName,
                lastName,
                email,
                phone,
                notes
            });
        navigate('/')
        }


    return (
        <div className="row" style={{ marginTop: '100px' }} >
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="form-control"></input>
                    <br></br>
                    <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="form-control"></input>
                    <br></br>
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control"></input>
                    <br></br>
                    <input type="text" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="form-control"></input>
                    <br></br>
                    <textarea rows="5" className="form-control" onChange={e => setNotes(e.target.value)} name="notes"></textarea>
                    <br></br>
                    <button onClick={onSubmit} className="btn btn-primary">Submit</button>
                </div>

            </div>
        </div>

    )
}

export default AddCandidate;

