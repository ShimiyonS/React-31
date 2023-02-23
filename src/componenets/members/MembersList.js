import React from 'react'

import { Link } from 'react-router-dom';

function MembersList({ memberdata }) {


    return (
        <>
            <tr>
                <td>{memberdata.id}</td>
                <td>{memberdata.name}</td>
                <td>{memberdata.email}</td>
                <td>{memberdata.contact}</td>
                <td><Link className='btn btn-info btn-sm me-1' to={`/portal/memberview/${memberdata.id}`} >view</Link>
                </td>
            </tr>
        </>
    )
}

export default MembersList