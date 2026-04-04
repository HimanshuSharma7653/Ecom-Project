import React from 'react'

export default function SignupPage() {
  return (
    <>
        <section className="login account footer-padding">
        <div className="container">
            <div className="login-section account-section">
                <div className="review-form">
                    <h5 className="comment-title">Create Account</h5>
                    <div className=" account-inner-form">
                        <div className="review-form-name">
                            <label for="fname" className="form-label">First Name*</label>
                            <input type="text" id="fname" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="review-form-name">
                            <label for="lname" className="form-label">Last Name*</label>
                            <input type="text" id="lname" className="form-control" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className=" account-inner-form">
                        <div className="review-form-name">
                            <label for="email" className="form-label">Email*</label>
                            <input type="email" id="email" className="form-control" placeholder="user@gmail.com"/>
                        </div>
                        <div className="review-form-name">
                            <label for="phone" className="form-label">Phone*</label>
                            <input type="tel" id="phone" className="form-control" placeholder="+880388**0899"/>
                        </div>
                    </div>
                    <div className="review-form-name">
                        <label for="country" className="form-label">Country*</label>
                        <select id="country" className="form-select">
                            <option>Choose...</option>
                            <option>Bangladesh</option>
                            <option>United States</option>
                            <option selected>United Kingdom</option>
                        </select>
                    </div>
                    <div className="review-form-name address-form">
                        <label for="address" className="form-label">Address*</label>
                        <input type="text" id="address" className="form-control" placeholder="Enter your Address"/>
                    </div>
                    <div className=" account-inner-form city-inner-form">
                        <div className="review-form-name">
                            <label for="city" className="form-label">Town / City*</label>
                            <select id="city" className="form-select">
                                <option>Choose...</option>
                                <option>Newyork</option>
                                <option>Dhaka</option>
                                <option selected>London</option>
                            </select>
                        </div>
                        <div className="review-form-name">
                            <label for="number" className="form-label">Postcode / ZIP*</label>
                            <input type="number" id="number" className="form-control" placeholder="0000"/>
                        </div>
                    </div>


                    <div className="review-form-name checkbox">
                        <div className="checkbox-item">
                            <input type="checkbox"/>
                            <p className="remember">
                                I agree all terms and condition in <span className="inner-text">ShopUs.</span></p>
                        </div>
                    </div>
                    <div className="login-btn text-center">
                        <a href="#" className="shop-btn">Create an Account</a>
                        <span className="shop-account">Already have an account ?<a href="login.html">Log In</a></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
