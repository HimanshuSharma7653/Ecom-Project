import React from 'react'
import Breadcrum from '../../Components/Breadcrum'

export default function CartPage() {
  return (
    <>

        <Breadcrum title="Manage your Cart"/>

        <section className="product-cart product footer-padding">
        <div className="container">
            <div className="cart-section">
                <table>
                    <tbody>
                        <tr className="table-row table-top-row">
                            <td className="table-wrapper wrapper-product">
                                <h5 className="table-heading">PRODUCT</h5>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="table-heading">PRICE</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="table-heading">QUANTITY</h5>
                                </div>
                            </td>
                            <td className="table-wrapper wrapper-total">
                                <div className="table-wrapper-center">
                                    <h5 className="table-heading">TOTAL</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="table-heading">ACTION</h5>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-row ticket-row">
                            <td className="table-wrapper wrapper-product">
                                <div className="wrapper">
                                    <div className="wrapper-img">
                                        <img src="./assets/images/homepage-one/product-img/product-img-1.webp"
                                            alt="img"/>
                                    </div>
                                    <div className="wrapper-content">
                                        <h5 className="heading">classNameic Oxford Shirt</h5>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$10.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <div className="quantity">
                                        <span className="minus">
                                            -
                                        </span>
                                        <span className="number">1</span>
                                        <span className="plus">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper wrapper-total">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$60.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                                                fill="#AAAAAA"></path>
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-row ticket-row">
                            <td className="table-wrapper wrapper-product">
                                <div className="wrapper">
                                    <div className="wrapper-img">
                                        <img src="./assets/images/homepage-one/product-img/product-img-2.webp"
                                            alt="img"/>
                                    </div>
                                    <div className="wrapper-content">
                                        <h5 className="heading"> black Shirt</h5>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$05.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <div className="quantity">
                                        <span className="minus">
                                            -
                                        </span>
                                        <span className="number">1</span>
                                        <span className="plus">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper wrapper-total">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$10.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper ">
                                <div className="table-wrapper-center">
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                                                fill="#AAAAAA"></path>
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-row ticket-row">
                            <td className="table-wrapper wrapper-product">
                                <div className="wrapper">
                                    <div className="wrapper-img">
                                        <img src="./assets/images/homepage-one/product-img/product-img-3.webp"
                                            alt="img"/>
                                    </div>
                                    <div className="wrapper-content">
                                        <h5 className="heading">Blue Party Shirt</h5>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$30.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <div className="quantity">
                                        <span className="minus">
                                            -
                                        </span>
                                        <span className="number">1</span>
                                        <span className="plus">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper wrapper-total">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$50.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                                                fill="#AAAAAA"></path>
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-row ticket-row">
                            <td className="table-wrapper wrapper-product">
                                <div className="wrapper">
                                    <div className="wrapper-img">
                                        <img src="./assets/images/homepage-one/product-img/product-img-4.webp"
                                            alt="img"/>
                                    </div>
                                    <div className="wrapper-content">
                                        <h5 className="heading">Red Party Dress</h5>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$20.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <div className="quantity">
                                        <span className="minus">
                                            -
                                        </span>
                                        <span className="number">1</span>
                                        <span className="plus">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td className="table-wrapper wrapper-total">
                                <div className="table-wrapper-center">
                                    <h5 className="heading">$40.00</h5>
                                </div>
                            </td>
                            <td className="table-wrapper">
                                <div className="table-wrapper-center">
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                                                fill="#AAAAAA"></path>
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="wishlist-btn cart-btn">
                <a href="empty-cart.html" className="clean-btn">Clear Cart</a>
                <a href="#" className="shop-btn update-btn">Update Cart</a>
                <a href="checkout.html" className="shop-btn">Proceed to Checkout</a>
            </div>
        </div>
    </section>
    </>
  )
}
