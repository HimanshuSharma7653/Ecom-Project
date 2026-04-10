import React, { useEffect, useState } from 'react'

import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import { useDispatch, useSelector } from 'react-redux';

import { getFeature, deleteFeature } from "../../../Redux/ActionCreators/FeatureActionCreators"


import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { Link } from 'react-router-dom'



export default function AdminFeaturePage() {
    let [data, setData] = useState([])


    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are you sure You want to delete that Record :")) {
            dispatch(deleteFeature({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }

  


    useEffect(() => {
        let time = (() => {
            dispatch(getFeature())
            if (FeatureStateData.length)
                setData(FeatureStateData)   
            let time = setTimeout(() => {
                $('#myTable').DataTable()
            }, 500)
            console.log("🔁 useEffect running")
            return time
        })()
        return () => clearTimeout(time)
    }
        , [FeatureStateData.length])

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='mybackground text-light text-center p-2'>Feature
                            <Link to="/admin/feature/create"><i className='bi bi-plus text-light fs-1 float-end mt-2 '></i></Link>
                        </h5>
                        <div className="table-responsive">


                            <table id='myTable' className="table table-bordered">

                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Icon</th>
                                        <th>Short Description</th>
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
                                            <td><span className='my-icon-3' dangerouslySetInnerHTML={{__html:item.icon}}/></td>
                                            <td>{item.shortDescription}</td>
                                            <td>{item.status ? "Active" : "InActive"}</td>
                                            <td>
                                                <button className='btn btn-danger ' onClick={() => deleteRecord(item.id)} >
                                                    <i className='bi bi-trash fs-3 '></i>
                                                </button>

                                            </td>
                                            <td>
                                                <Link to={`/admin/feature/update/${item.id}`} className='btn btn-primary mybackground'>
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
