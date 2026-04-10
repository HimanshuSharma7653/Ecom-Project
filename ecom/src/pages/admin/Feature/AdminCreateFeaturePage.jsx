import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidators from '../../../Validators/FormValidators'
import ImageValidators from '../../../Validators/ImageValidators'

import { useSelector, useDispatch } from 'react-redux'
import {getFeature, createFeature} from "../../../Redux/ActionCreators/FeatureActionCreators"

export default function AdminCreateFeaturePage() {
    let [data,setData] = useState({
        name : "",
        icon : "",
        shortDescription : "",
        status : true
    })

    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    let [errormessage, setErrormessage] = useState({
        name : "Name field is Required !",
        icon : "icon field is required !",
        shortDescription : "shortDescription field is required !"
    })

    let [show, setShow] = useState(false)

    function getInputData(e){
            let {name,value} = e.target
            
            setData({...data, [name]: name==="status"?(value==="1"?true:false):value})
            setErrormessage({...errormessage,[name]:FormValidators(e)})
    }

    useEffect(() => {
        (()=>{
            dispatch(getFeature())
        })()
    }, [FeatureStateData.length])
    
    function postData(e){
        e.preventDefault()
        let error = Object.values(errormessage).find(x=>x!="")
        if(error)
            setShow(true)
        else{
            let item = FeatureStateData.find(x=> x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if(item){
                setErrormessage({...errormessage,name:"Feature with this name is already exist"})
                setShow(true)
                return
            }
            dispatch(createFeature({...data}))


            navigate('/admin/feature')
            alert("Success")
        }
        
         

    }
  return (
    <>
        <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminSideBar/>
                        </div>
                        <div className="col-md-9">
                            <h5 className='mybackground text-light text-center p-2 mb-3 mt-1'>Create Feature
                                <Link to="/admin/feature"><i className='bi bi-arrow-left text-light fs-1 float-end mt-2 '></i></Link>
                            </h5>
                            <form onSubmit={postData}>
                                <div className="row">


                                    <div className="col-12 mb-5">
                                        <label >Name*</label>
                                        <input type="text" name='name' placeholder='Feature name' onChange={getInputData} className={`form-control ${show && errormessage.name? "border-danger":"myborder"}`} />
                                        {show && errormessage.name?<p className='text-danger'>{errormessage.name}</p>:null}
                                    </div>

                                    <div className="col-12 mb-5">
                                        <label >Short Description*</label>
                                        <textarea name="shortDescription" placeholder='Short Description...' onChange={getInputData} rows={3} className={`form-control ${show && errormessage.shortDescription? "border-danger":"myborder"}`}></textarea>
                                        {show && errormessage.shortDescription ?<p className='text-danger'>{errormessage.shortDescription}</p>:null}
                                    </div>


                                    <div className="col-md-6 mb-5">
                                        <input type="text" name='icon' onChange={getInputData}placeholder="Icon tag eg. <i class= 'bi bi-list'> </i>" className={`form-control ${show && errormessage.icon? "border-danger":"myborder"}`} />
                                        {show && errormessage.icon?<p className='text-danger'>{errormessage.icon}</p>:null}
                                    </div>


                                    <div className="col-md-6 mb-5">
                                        <select name="status" onChange={getInputData} className='form-select myborder'>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>


                                    <div className="col-12 mb-5">
                                        <button className='btn btn-primary btn-lg w-100 mybackground p-3'>Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{height:80}}></div>
    </>
  )
}
