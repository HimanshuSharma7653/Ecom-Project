import React from 'react'
import AdminSideBar from '../../Components/admin/AdminSideBar'

export default function AdminHomePage() {
  return (
    <>
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminSideBar/>
                </div>
                <div className="col-md-9">
                    <h5 className='mybackground text-light text-center p-2'>Admin Profile</h5>
                    <table className='table table-bordered table-striped'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Himanshu Sharma</td>
                            </tr>
                            <tr>
                                <th>Username</th>
                                <td>Himanshu</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>Contacthimanshu53@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>936835653</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Full Stack Web </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <div style={{height:80}}></div>
    </>
  )
}
