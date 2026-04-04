import React, { useEffect, useState } from 'react'

import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import { useDispatch, useSelector } from 'react-redux';

import { getMaincategory, deleteMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreators"


import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { Link } from 'react-router-dom'



export default function AdminMaincategoryPage() {
    let [data, setData] = useState([])

    console.log("📄 Component loaded")

    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are you sure You want to delete that Record :")) {
            dispatch(deleteMaincategory({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }

  


    useEffect(() => {
        let time = (() => {
            dispatch(getMaincategory())
            if (MaincategoryStateData.length)
                setData(MaincategoryStateData)   
            let time = setTimeout(() => {
                $('#myTable').DataTable()
            }, 500)
            console.log("🔁 useEffect running")
            return time
        })()
        return () => clearTimeout(time)
    }
        , [MaincategoryStateData.length])

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='mybackground text-light text-center p-2'>Main Category
                            <Link to="/admin/maincategory/create"><i className='bi bi-plus text-light fs-1 float-end mt-2 '></i></Link>
                        </h5>
                        <div className="table-responsive">


                            <table id='myTable' className="table table-bordered">

                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>




                                <tbody>
                                    {data.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={70} width={100} alt="" />
                                                </Link>
                                            </td>
                                            <td>{item.status ? "Active" : "InActive"}</td>
                                            <td>
                                                <button className='btn btn-danger ' onClick={() => deleteRecord(item.id)} >
                                                    <i className='bi bi-trash fs-3 '></i>
                                                </button>

                                            </td>
                                            <td>
                                                <Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary mybackground'>
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
