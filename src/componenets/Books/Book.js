import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";
import LoginContext from '../Context/LoginContext';
import Booklist from './BookList';



function Book() {
    const [isLoading, setLoading] = useState(true);
    const logindata = useContext(LoginContext);
    const [bookdata, setbookData] = useState([]);
    const [search, setSearch] = useState("");
    
    
    const handlesearch = (data, search) => {
    // eslint-disable-next-line
    const filteredData = data.filter((d) => {
            d.book_name = d.book_name.toLowerCase();
            if (d.book_name.includes(search)) {
                return true;
            }
        });
        return filteredData;
    }
    // eslint-disable-next-line
    const filteredData = useMemo(() => handlesearch(bookdata, search));



    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://638dfe2b4190defdb753283c.mockapi.io/books");
            setbookData(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const DeleteBook = async (id) => {
        const confirm = window.confirm("Do you want to delete this record?")

        if (confirm) {
            await axios.delete(`https://638dfe2b4190defdb753283c.mockapi.io/books/${id}`);
            getUsers();
        }
    };

    return (
        <>
            <div className="card shadow mb-4 m-3">
                <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                    <h6 className="m-0 font-weight-bold text-primary">Books List</h6>
                    <form className="d-flex justify-content-between">
                        <input style={{ textTransform: "capitalize" }} className="form-control me-2" type="search" placeholder="search by bookname" aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)} />
                    </form>
                    {logindata.isLibrarianVisible ? <Link className="btn btn-outline-success" to="/portal/addbook">Add Book</Link> : null}

                </div>
                {isLoading ? <h1>Loading...</h1> : <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Book Name</th>
                                    <th>Author</th>
                                    <th>Number of Books</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!search && bookdata?.map((dt, index) => <Booklist key={index} bookdata={dt} DeleteBook={DeleteBook} />)}
                                {search && filteredData?.map((dt, index) => <Booklist key={index} bookdata={dt} DeleteBook={DeleteBook} />)}
                            </tbody>
                        </table>
                    </div>
                </div>}

            </div>
            <div className="d-sm-flex  justify-content-start" >
                <Link to="/portal/mentor" className="btn btn-sm btn-primary shadow-sm ">BACK</Link>
            </div>
        </>
    )
}

export default Book
