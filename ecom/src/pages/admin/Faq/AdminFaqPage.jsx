import React, { useEffect, useState } from 'react'

import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import { useDispatch, useSelector } from 'react-redux';

import { getFaq, deleteFaq } from "../../../Redux/ActionCreators/FaqActionCreators"


import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { Link } from 'react-router-dom'



export default function AdminFaqPage() {
    let [data, setData] = useState([])

    console.log("📄 Component loaded")

    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are you sure You want to delete that Record :")) {
            dispatch(deleteFaq({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }

  


    useEffect(() => {
        let time = (() => {
            dispatch(getFaq())
            if (FaqStateData.length)
                setData(FaqStateData)   
            let time = setTimeout(() => {
                $('#myTable').DataTable()
            }, 500)
            console.log("🔁 useEffect running")
            return time
        })()
        return () => clearTimeout(time)
    }
        , [FaqStateData.length])

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='mybackground text-light text-center p-2'>Faq Category
                            <Link to="/admin/faq/create"><i className='bi bi-plus text-light fs-1 float-end mt-2 '></i></Link>
                        </h5>
                        <div className="table-responsive">


                            <table id='myTable' className="table table-bordered">

                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>




                                <tbody>
                                    {data.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.question}</td>
                                            <td>{item.answer}</td>
                                            <td>{item.status ? "Active" : "InActive"}</td>
                                            <td>
                                                <button className='btn btn-danger ' onClick={() => deleteRecord(item.id)} >
                                                    <i className='bi bi-trash fs-3 '></i>
                                                </button>

                                            </td>
                                            <td>
                                                <Link to={`/admin/faq/update/${item.id}`} className='btn btn-primary mybackground'>
                                                    <i className='bi bi-pencil fs-3'></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>

                            </table>


                        </div>


                    </div>
                </div>
            </div>
            <div style={{ height: 80 }}></div>
        </>
    )
}
