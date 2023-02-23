import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import axios from "axios";
const formvalidationSchema = yup.object({

    book_name: yup
        .string()
        .required().min(4),
    book_count: yup
        .number()
        .required(),
    author: yup
        .string()
        .required().min(4),
    description: yup
        .string()
        .required().min(5)
})

function AddBook() {
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {

            book_name: "",
            book_count: "",
            author: "",
            description: ""
        },
        validationSchema: formvalidationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post(`https://638dfe2b4190defdb753283c.mockapi.io/books`, values);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
            navigate("/portal/book");

        },
    })

    return (
        <>
            <form className="container" onSubmit={myFormik.handleSubmit}>
                <div className="row mt-4 ps-5">
                    <div className="col-lg-5  mt-5 m-auto">
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.book_name && myFormik.errors.book_name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.book_name}
                            name="book_name"
                            placeholder="Enter Book Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.book_name && myFormik.errors.book_name ? myFormik.errors.book_name : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.book_count && myFormik.errors.book_count ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.book_count}
                            name="book_count"
                            placeholder="Enter book count"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.book_count && myFormik.errors.book_count ? myFormik.errors.book_count : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.author && myFormik.errors.author ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.author}
                            name="author"
                            placeholder="Enter Author Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.author && myFormik.errors.author ? myFormik.errors.author : null}</span><br />
                        <textarea rows="3" cols="3"
                            type="text"
                            className={`form-control ${myFormik.touched.description && myFormik.errors.description ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.description}
                            name="description"
                            placeholder="Enter book's description"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}>
                        </textarea><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.description && myFormik.errors.description ? myFormik.errors.description : null}</span><br />
                        <div className="d-sm-flex  justify-content-end mt-3">
                            <button disabled={isLoading} type="submit" className="btn btn-primary create-btn">
                                {isLoading ? "isLoading" : "Add"}
                            </button>
                        </div>
                    </div>

                </div>

            </form>
        </>
    )
}

export default AddBook
