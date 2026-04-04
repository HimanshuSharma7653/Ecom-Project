import React from 'react'

export default function LoginPage() {
  return (
    <>
        <section className="login footer-padding">
        <div className="container">
            <div className="login-section">
                <div className="review-form">
                    <h5 className="comment-title">Log In</h5>
                    <div className="review-inner-form ">
                        <div className="review-form-name">
                            <label for="email" className="form-label">Email Address**</label>
                            <input type="email" id="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="review-form-name">
                            <label for="password" className="form-label">Password*</label>
                            <input type="password" id="password" className="form-control" placeholder="password"/>
                        </div>
                        <div className="review-form-name checkbox">
                            <div className="checkbox-item">
                                <input type="checkbox"/>
                                <span className="address">
                                    Remember Me</span>
                            </div>
                            <div className="forget-pass">
                                <p>Forgot password?</p>
                            </div>
                        </div>
                    </div>
                    <div className="login-btn text-center">
                        <a href="#" className="shop-btn">Log In</a>
                        <span className="shop-account">Dont't have an account ?<a href="create-account.html">Sign Up
                                Free</a></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
