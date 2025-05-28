
import React, { useState, useEffect } from 'react';


const Row = ({ candidate,showNotes }) => {
    const { firstName, lastName, email, phone, notes } = candidate;
        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td>{email}</td>
                {showNotes && < td > {notes}</td>}

            </tr>
        )
  
};
export default Row;