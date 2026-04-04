import React from 'react'
import Breadcrum from '../../Components/Breadcrum'

export default function CheckoutPage() {
  return (
    <>
        <Breadcrum title="Place your order"/>

        <section className="checkout product footer-padding">
        <div className="container">
            <div className="checkout-section">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="checkout-wrapper">
                            <a href="login.html" className="shop-btn">Log into Your Account</a>
                            <div className="account-section billing-section">
                                <h5 className="wrapper-heading">Billing Details</h5>
                                <div className="review-form">
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
                                            <input type="email" id="email" className="form-control"
                                                placeholder="user@gmail.com"/>
                                        </div>
                                        <div className="review-form-name">
                                            <label for="phone" className="form-label">Phone*</label>
                                            <input type="tel" id="phone" className="form-control"
                                                placeholder="+880388**0899"/>
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
                                        <input type="text" id="address" className="form-control"
                                            placeholder="Enter your Address"/>
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
                                            <input type="checkbox" id="account"/>
                                            <label for="account" className="form-label">
                                                Create an account?</label>
                                        </div>
                                    </div>
                                    <div className="review-form-name shipping">
                                        <h5 className="wrapper-heading">Shipping Address</h5>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="remember"/>
                                            <label for="remember" className="form-label">
                                                Create an account?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="checkout-wrapper">
                            <a href="#" className="shop-btn">Enter Coupon Code</a>
                            <div className="account-section billing-section">
                                <h5 className="wrapper-heading">Order Summary</h5>
                                <div className="order-summery">
                                    <div className="subtotal product-total">
                                        <h5 className="wrapper-heading">PRODUCT</h5>
                                        <h5 className="wrapper-heading">TOTAL</h5>
                                    </div>
                                    <hr/>
                                    <div className="subtotal product-total">
                                        <ul className="product-list">
                                            <li>
                                                <div className="product-info">
                                                    <h5 className="wrapper-heading">Apple Watch X1</h5>
                                                    <p className="paragraph">64GB, Black, 44mm, Chain Belt</p>
                                                </div>
                                                <div className="price">
                                                    <h5 className="wrapper-heading">$38</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product-info">
                                                    <h5 className="wrapper-heading">Beats Wireless x1</h5>
                                                    <p className="paragraph">64GB, Black, 44mm, Chain Belt</p>
                                                </div>
                                                <div className="price">
                                                    <h5 className="wrapper-heading">$48</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product-info">
                                                    <h5 className="wrapper-heading">Samsung Galaxy S10 x2</h5>
                                                    <p className="paragraph">12GB RAM, 512GB, Dark Blue</p>
                                                </div>
                                                <div className="price">
                                                    <h5 className="wrapper-heading">$279</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    <div className="subtotal product-total">
                                        <h5 className="wrapper-heading">SUBTOTAL</h5>
                                        <h5 className="wrapper-heading">$365</h5>
                                    </div>
                                    <div className="subtotal product-total">
                                        <ul className="product-list">
                                            <li>
                                                <div className="product-info">
                                                    <p className="paragraph">SHIPPING</p>
                                                    <h5 className="wrapper-heading">Free Shipping</h5>

                                                </div>
                                                <div className="price">
                                                    <h5 className="wrapper-heading">+$0</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    <div className="subtotal total">
                                        <h5 className="wrapper-heading">TOTAL</h5>
                                        <h5 className="wrapper-heading price">$365</h5>
                                    </div>
                                    <div className="subtotal payment-type">
                                        <div className="checkbox-item">
                                            <input type="radio" id="bank" name="bank"/>
                                            <div className="bank">
                                                <h5 className="wrapper-heading">Direct Bank Transfer</h5>
                                                <p className="paragraph">Make your payment directly into our bank account.
                                                    Please use
                                                    <span className="inner-text">
                                                        your Order ID as the payment reference.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="radio" id="cash" name="bank"/>
                                            <div className="cash">
                                                <h5 className="wrapper-heading">Cash on Delivery</h5>
                                            </div>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="radio" id="credit" name="bank"/>
                                            <div className="credit">
                                                <h5 className="wrapper-heading">Credit/Debit Cards or Paypal</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="shop-btn">Place Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
