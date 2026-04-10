import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



import FormValidators from '../../../Validators/FormValidators'
import ImageValidators from '../../../Validators/ImageValidators'
import AdminSideBar from '../../../Components/admin/AdminSideBar'
import { useSelector, useDispatch } from 'react-redux'
import { getFaq, updateFaq } from '../../../Redux/ActionCreators/FaqActionCreators'





export default function AdminUpdateFaqPage() {

    let { id } = useParams()

    let [data, setData] = useState({
        question: "",
        answer: "",
        status: true
    })
    let [errormessage, setErrormessage] = useState({
        question: "",
        answer: ""
    })

    let navigate = useNavigate()
    let [show, setShow] = useState(false)

    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()


    function getInputData(e) {
        let { name, value } = e.target


        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrormessage({ ...errormessage, [name]: FormValidators(e) })
    }



    function postData(e) {
        e.preventDefault()
        let error = Object.values(errormessage).find(x => x != "")
        if (error)
            setShow(true)
        else {
            let item = FaqStateData.find(x => x.id !== id && (x.question.toLocaleLowerCase() === data.question.toLocaleLowerCase()))
            if (item) {
                setErrormessage({ ...errormessage, name: "Faq Record with this question is already exist" })
                setShow(true)
                return
            }
            dispatch(updateFaq({ ...data }))

            navigate('/admin/faq')
        }



    }

    useEffect(() => {
        (() => {
            dispatch(getFaq())

            if (FaqStateData.length) {
                let item = FaqStateData.find(x => x.id === id)
                if (item) {
                    setData({ ...data, ...item })
                }
                else
                    navigate("/admin/faq")

            }
        })()
    }, [FaqStateData.length])


    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='mybackground text-light text-center p-2 mb-3 mt-1'>Create Main Category
                            <Link to="/admin/faq"><i className='bi bi-arrow-left text-light fs-1 float-end mt-2 '></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">


                                <div className="col-12 mb-5">
                                        <label >Question*</label>
                                        <input type="text" name='question' value={data.question} placeholder='Your Question...' onChange={getInputData} className={`form-control ${show && errormessage.question? "border-danger":"myborder"}`} />
                                        {show && errormessage.question?<p className='text-danger'>{errormessage.question}</p>:null}
                                    </div>


                                     <div className="col-12 mb-5">
                                        <label >Answer*</label>
                                        <textarea name="answer" value={data.answer} placeholder='Answer...' onChange={getInputData} rows={3} className={`form-control ${show && errormessage.answer? "border-danger":"myborder"}`}></textarea>
                                        {show && errormessage.answer ?<p className='text-danger'>{errormessage.answer}</p>:null}
                                    </div>


                                <div className="col-md-6 mb-5">
                                    <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className='form-select myborder'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>


                                <div className="col-12 mb-5">
                                    <button className='btn btn-primary btn-lg w-100 mybackground p-3'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ height: 80 }}></div>
        </>
    )
}
