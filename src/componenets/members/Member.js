import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MembersList from './MembersList';

function Member() {
    const [memberdata, setmemberdata] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://638dfe2b4190defdb753283c.mockapi.io/Teacher");
            setmemberdata(users.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="card shadow mb-4 m-3">
            <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">Members List</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberdata.map((dt, index) => <MembersList key={index} memberdata={dt} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Member
