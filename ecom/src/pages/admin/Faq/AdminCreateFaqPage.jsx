import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidators from '../../../Validators/FormValidators'
import ImageValidators from '../../../Validators/ImageValidators'

import { useSelector, useDispatch } from 'react-redux'
import {getFaq, createFaq} from "../../../Redux/ActionCreators/FaqActionCreators"

export default function AdminCreateFaqPage() {
    let [data,setData] = useState({
        question : "",
        answer : "",
        status : true
    })

    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    let [errormessage, setErrormessage] = useState({
        question : "Question field is Required !",
        answer : "Answer field is required !"
    })

    let [show, setShow] = useState(false)

    function getInputData(e){
            let {name,value} = e.target
            

            setData({...data, [name]: name==="status"?(value==="1"?true:false):value})
            setErrormessage({...errormessage,[name]:FormValidators(e)})
    }

    useEffect(() => {
        (()=>{
            dispatch(getFaq())
        })()
    }, [FaqStateData.length])
    
    function postData(e){
        e.preventDefault()
        let error = Object.values(errormessage).find(x=>x!="")
        if(error)
            setShow(true)
        else{
            let item = FaqStateData.find(x=> x.question.toLocaleLowerCase() === data.question.toLocaleLowerCase())
            if(item){
                setErrormessage({...errormessage,name:"Faq with this question record is already exist"})
                setShow(true)
                return
            }
            dispatch(createFaq({...data}))

            navigate('/admin/faq')
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
                            <h5 className='mybackground text-light text-center p-2 mb-3 mt-1'>Create Faq
                                <Link to="/admin/faq"><i className='bi bi-arrow-left text-light fs-1 float-end mt-2 '></i></Link>
                            </h5>
                            <form onSubmit={postData}>
                                <div className="row">


                                    <div className="col-12 mb-5">
                                        <label >Question*</label>
                                        <input type="text" name='question' placeholder='Your Question...' onChange={getInputData} className={`form-control ${show && errormessage.question? "border-danger":"myborder"}`} />
                                        {show && errormessage.question?<p className='text-danger'>{errormessage.question}</p>:null}
                                    </div>


                                     <div className="col-12 mb-5">
                                        <label >Answer*</label>
                                        <textarea name="answer" placeholder='Answer...' onChange={getInputData} rows={3} className={`form-control ${show && errormessage.answer? "border-danger":"myborder"}`}></textarea>
                                        {show && errormessage.answer ?<p className='text-danger'>{errormessage.answer}</p>:null}
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
