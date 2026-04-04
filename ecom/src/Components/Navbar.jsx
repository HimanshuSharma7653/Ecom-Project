import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [showSearchModal, setShowSearchModal] = useState(false);
  let [showDropDown, setShowDropDown] = useState(false);

  return (
    <header id="header" className="header">
      <div className="header-top-section">
        <div className="container">
          <div className="header-top">
            <div className="header-contact">
              <Link
                to={import.meta.env.VITE_APP_FACEBOOK}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-facebook fs-2"></i>
                </span>
              </Link>
              <Link
                to={import.meta.env.VITE_APP_TWITTER}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-twitter fs-2"></i>
                </span>
              </Link>
              <Link
                to={import.meta.env.VITE_APP_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-instagram fs-2"></i>
                </span>
              </Link>
              <Link
                to={import.meta.env.VITE_APP_YOUTUBE}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-youtube fs-2"></i>
                </span>
              </Link>
            </div>

            <div className="header-contact">
              <Link
                to={import.meta.env.VITE_APP_MAP1}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-geo-alt fs-2 me-2"></i>
                  <span className="d-none d-lg-inline-block me-2">
                    {import.meta.env.VITE_APP_ADDRESS}
                  </span>
                </span>
              </Link>

              <Link
                to={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-envelope fs-2 me-2"></i>
                  <span className="d-none d-lg-inline-block me-2">
                    {import.meta.env.VITE_APP_EMAIL}
                  </span>
                </span>
              </Link>

              <Link
                to={`tel:${import.meta.env.VITE_APP_PHONE}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-phone fs-2 me-2"></i>
                  <span className="d-none d-lg-inline-block me-2">
                    {import.meta.env.VITE_APP_PHONE}
                  </span>
                </span>
              </Link>

              <Link
                to={`https://wa.me/:${import.meta.env.VITE_APP_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-number me-4">
                  <i className="bi bi-whatsapp fs-2 me-2"></i>
                  <span className="d-none d-lg-inline-block">
                    {import.meta.env.VITE_APP_WHATSAPP}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center-section d-none d-lg-block">
        <div className="container">
          <div className="header-center">
            <div className="logo">
              <Link to="/">
                <img
                  src="/images/logos/logo-bright-png.png"
                  style={{ height: 80 }}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="header-cart-items">
              <div className="header-search">
                <button
                  className="header-search-btn"
                  onClick={() => {
                    setShowSearchModal(true);
                  }}
                >
                  <span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`modal-wrapper search ${showSearchModal ? "active" : ""}`}
                >
                  <div className="anywhere-away"></div>

                  <div className="modal-main">
                    <div
                      className="wrapper-close-btn"
                      onClick={() => {
                        setShowSearchModal(false);
                      }}
                    >
                      <i className="bi bi-x fs-1"></i>
                    </div>
                    <div className="wrapper-main">
                      <div className="search-section">
                        <input
                          type="text"
                          placeholder="Search Products........."
                        />
                        <div className="divider"></div>
                        <button type="button">All Categories</button>
                        <a href="#" className="shop-btn">
                          Search
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-favourite">
                <Link to="/profile?option=wishlist" className="cart-item">
                  <i className="bi bi-heart fs-3"></i>
                  <span className="cart-text">Wishlist</span>
                </Link>
              </div>
              <div className="header-cart">
                <Link to="/cart" className="cart-item">
                  <i className="bi bi-cart fs-2"></i>
                  <span className="cart-text">Cart</span>
                </Link>
                <div className="cart-submenu ">
                  <div className="cart-wrapper-item">
                    <div className="wrapper">
                      <div className="wrapper-item">
                        <div className="wrapper-img">
                          <img
                            src="assets/images/homepage-one/product-img/product-img-1.webp"
                            alt="img"
                          />
                        </div>
                        <div className="wrapper-content">
                          <h5 className="wrapper-title">
                            Classic Design Skart
                          </h5>
                          <div className="price">
                            <p className="new-price">$20.00</p>
                          </div>
                        </div>
                      </div>
                      <span className="close-btn">
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="wrapper">
                      <div className="wrapper-item">
                        <div className="wrapper-img">
                          <img
                            src="assets/images/homepage-one/product-img/product-img-2.webp"
                            alt="img"
                          />
                        </div>
                        <div className="wrapper-content">
                          <h5 className="wrapper-title">Black Suit</h5>
                          <div className="price">
                            <p className="new-price">$10.00</p>
                          </div>
                        </div>
                      </div>
                      <span className="close-btn">
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="wrapper">
                      <div className="wrapper-item">
                        <div className="wrapper-img">
                          <img
                            src="assets/images/homepage-one/product-img/product-img-3.webp"
                            alt="img"
                          />
                        </div>
                        <div className="wrapper-content">
                          <h5 className="wrapper-title">Blue Party Dress</h5>
                          <div className="price">
                            <p className="new-price">$15.00</p>
                          </div>
                        </div>
                      </div>
                      <span className="close-btn">
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="wrapper">
                      <div className="wrapper-item">
                        <div className="wrapper-img">
                          <img
                            src="assets/images/homepage-one/product-img/product-img-4.webp"
                            alt="img"
                          />
                        </div>
                        <div className="wrapper-content">
                          <h5 className="wrapper-title">Classic Red Dress</h5>
                          <div className="price">
                            <p className="new-price">$18.00</p>
                          </div>
                        </div>
                      </div>
                      <span className="close-btn">
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="cart-wrapper-section">
                    <div className="wrapper-line"></div>
                    <div className="wrapper-subtotal">
                      <h5 className="wrapper-title">Subtotal</h5>
                      <h5 className="wrapper-title">$60</h5>
                    </div>
                    <div className="cart-btn">
                      <a href="cart.html" className="shop-btn view-btn">
                        View Cart
                      </a>
                      <a href="checkout.html" className="shop-btn checkout-btn">
                        Checkout Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-user">
                <Link to="/profile">
                  <span>
                    <i className="bi bi-person fs-1"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="mobile-menu d-block d-lg-none">
        <div className="mobile-menu-header d-flex justify-content-between align-items-center">
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="bi bi-list fs-1"></i>
          </button>
          <Link to="/" className="mobile-header-logo">
            <img
              src="/images/logos/logo-bright-png.png"
              style={{ height: 80 }}
              alt="logo"
            />
          </Link>

          <div>
            <Link
              to="/profile?option=wishlist"
              className="header-cart cart-item me-5"
            >
              <i className="bi bi-heart fs-1 "></i>
              <span className="fs-2 ms-2">Wishlist</span>
            </Link>

            <Link to="/cart" className="header-cart cart-item me-4">
              <i className="bi bi-cart fs-1 "></i>
              <span className="fs-2 ms-2">Cart</span>
            </Link>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
        >
          <div className="offcanvas-body">
            <div className="header-top">
              <div className="header-cart ">
                <div className="header-compaire">
                  <div className="d-flex">
                    <Link
                      to="/profile?option=wishlist"
                      className="header-cart cart-item me-3"
                    >
                      <i
                        className="bi bi-heart fs-1"
                        style={{ marginRight: "-15px" }}
                      ></i>
                      <span>Wishlist</span>
                    </Link>

                    <Link to="/cart" className="header-cart cart-item me-2">
                      <i
                        className="bi bi-cart fs-1"
                        style={{ marginRight: "-15px" }}
                      ></i>
                      <span>Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shop-btn">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
           
           <div className="header-top">
             <div className="header-contact">
                <Link className="contact-number d-block" to='/'>Home</Link>
                <Link className="contact-number d-block" to='/about'>About</Link>
                <Link className="contact-number d-block" to='/shop'>Shop</Link>
                <Link className="contact-number d-block" to='/features'>Features</Link>
                <Link className="contact-number d-block" to='/testimonial'>Testimonial</Link>
                <Link className="contact-number d-block" to='/faq'>Faq</Link>
                <Link className="contact-number d-block" to='/contact'>Contact Us</Link>
                <Link className="contact-number d-block" to='/profile'>Profile</Link>
             </div>
           </div>

            {/* <div className="category-dropdown">
              <ul className="category-list">
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/dresses.webp"
                            alt="dress"
                          />
                        </span>
                        <span className="dropdown-text">Dresses</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/bags.webp"
                            alt="Bags"
                          />
                        </span>
                        <span className="dropdown-text">Bags</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/sweaters.webp"
                            alt="sweaters"
                          />
                        </span>
                        <span className="dropdown-text">Sweaters</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/shoes.webp"
                            alt="sweaters"
                          />
                        </span>
                        <span className="dropdown-text">Boots</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/gift.webp"
                            alt="gift"
                          />
                        </span>
                        <span className="dropdown-text">Gifts</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/sneakers.webp"
                            alt="sneakers"
                          />
                        </span>
                        <span className="dropdown-text">Sneakers</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/watch.webp"
                            alt="watch"
                          />
                        </span>
                        <span className="dropdown-text">Watches</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/ring.webp"
                            alt="ring"
                          />
                        </span>
                        <span className="dropdown-text">Gold Ring</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/cap.webp"
                            alt="cap"
                          />
                        </span>
                        <span className="dropdown-text">Cap</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/glass.webp"
                            alt="glass"
                          />
                        </span>
                        <span className="dropdown-text">Sunglasses</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-list-item">
                  <a href="product-sidebar.html">
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <div className="dropdown-list-item d-flex">
                        <span className="dropdown-img">
                          <img
                            src="./assets/images/homepage-one/category-img/baby.webp"
                            alt="baby"
                          />
                        </span>
                        <span className="dropdown-text">Baby Shop</span>
                      </div>
                      <div className="drop-down-list-icon">
                        <span>
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.5"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.5 0.818359)"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </nav>

      <div className="header-bottom d-lg-block d-none ">
        <div className="container">
          <div className="header-nav">
            <div className="category-menu-section position-relative">
              <div
                className={`empty position-fixed ${showDropDown ? "active" : ""}`}
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              ></div>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              >
                <span className="dropdown-icon">
                  <i
                    className={`bi ${showDropDown ? "bi-x" : "bi-list"} fs-1`}
                  ></i>
                </span>
                <span className="list-text">All Categories</span>
              </button>
              <div
                className={`category-dropdown position-absolute ${showDropDown ? "open-dropdown" : ""}`}
                id="subMenu"
              >
                <ul className="category-list">
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item">
                        <div className="dropdown-list-item">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/dresses.webp"
                              alt="dress"
                            />
                          </span>
                          <span className="dropdown-text">Dresses</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                                fill="#1D1D1D"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                                fill="#1D1D1D"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/bags.webp"
                              alt="Bags"
                            />
                          </span>
                          <span className="dropdown-text">Bags</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/sweaters.webp"
                              alt="sweaters"
                            />
                          </span>
                          <span className="dropdown-text">Sweaters</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/shoes.webp"
                              alt="sweaters"
                            />
                          </span>
                          <span className="dropdown-text">Boots</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/gift.webp"
                              alt="gift"
                            />
                          </span>
                          <span className="dropdown-text">Gifts</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/sneakers.webp"
                              alt="sneakers"
                            />
                          </span>
                          <span className="dropdown-text">Sneakers</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                                fill="#1D1D1D"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                                fill="#1D1D1D"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/watch.webp"
                              alt="watch"
                            />
                          </span>
                          <span className="dropdown-text">Watches</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/ring.webp"
                              alt="ring"
                            />
                          </span>
                          <span className="dropdown-text">Gold Ring</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/cap.webp"
                              alt="cap"
                            />
                          </span>
                          <span className="dropdown-text">Cap</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/glass.webp"
                              alt="glass"
                            />
                          </span>
                          <span className="dropdown-text">Sunglasses</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="category-list-item">
                    <a href="product-sidebar.html">
                      <div className="dropdown-item d-flex justify-content-between align-items-center">
                        <div className="dropdown-list-item d-flex">
                          <span className="dropdown-img">
                            <img
                              src="./assets/images/homepage-one/category-img/baby.webp"
                              alt="baby"
                            />
                          </span>
                          <span className="dropdown-text">Baby Shop</span>
                        </div>
                        <div className="drop-down-list-icon">
                          <span>
                            <svg
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.5"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.5 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-nav-menu">
              <ul className="menu-list">
                <li>
                  <Link to="/">
                    <span className="list-text">Home</span>
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    <span className="list-text">About</span>
                  </Link>
                </li>

                <li className="mega-menu">
                  <Link to="/shop">
                    <span className="list-text">Shop</span>
                  </Link>
                  <div className="shop-menu">
                    <div className="menu-wrapper">
                      <div className="menu-list">
                        <h5 className="menu-title">Dresses</h5>
                        <ul>
                          <li>
                            <a href="product-sidebar.html">Shirt</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">Skart</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html"> T-Shirt</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h5 className="menu-title">Bags</h5>
                        <ul>
                          <li>
                            <a href="product-sidebar.html">HandBags</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">Mobile Bags</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">School Bags</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-list">
                        <h5 className="menu-title">Cosmetics</h5>
                        <ul>
                          <li>
                            <a href="product-sidebar.html">Liptics</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">Foundation</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html"> Eye Liner</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-menu-img">
                      <img
                        src="./assets/images/homepage-one/empty-wishlist.webp"
                        alt="img"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <Link to="/features">
                    <span className="list-text">Features</span>
                  </Link>
                </li>

                <li>
                  <Link to="/testimonial">
                    <span className="list-text">testimonial</span>
                  </Link>
                </li>

                <li>
                  <Link to="/Faq">
                    <span className="list-text">Faq</span>
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    <span className="list-text">Contact Us</span>
                  </Link>
                </li>

                <li>
                  <Link to="/admin">
                    <span className="list-text">Admin</span>
                  </Link>
                </li>

                

                <li>
                  <a href="/profile">
                    <span className="list-text">Himanshu</span>
                  </a>
                  <ul className="header-sub-menu me-5">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/profile?option=wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="/order">Orders</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <button className="fs-4 ">Logout</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* <div className="header-vendor-btn">
                        <a href="become-vendor.html" className="shop-btn">
                            <span className="list-text shop-text">Became Vendor</span>
                            <span className="icon">
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.257 7.07205C20.038 7.07205 19.8474 7.07205 19.6563 7.07205C17.4825 7.07205 15.3086 7.07205 13.1352 7.07205C10.1545 7.07205 7.17336 7.0725 4.19265 7.0725C3.30392 7.0725 2.41519 7.07024 1.52646 7.07295C1.12124 7.07431 0.809811 7.25265 0.625785 7.62651C0.43866 8.00623 0.488204 8.37556 0.737704 8.70426C0.932347 8.96027 1.20529 9.08173 1.52867 9.08037C2.20948 9.07766 2.8903 9.07902 3.57111 9.07902C5.95285 9.07902 8.33415 9.07902 10.7159 9.07902C13.782 9.07902 16.8485 9.07902 19.9146 9.07902C20.0274 9.07902 20.1398 9.07902 20.2822 9.07902C20.1871 9.18332 20.1141 9.26865 20.0358 9.34857C19.5656 9.82672 19.0922 10.3022 18.6229 10.7812C18.1363 11.2779 17.6541 11.7791 17.1675 12.2757C16.4942 12.9634 15.8116 13.6415 15.1476 14.3391C14.9096 14.5893 14.8455 14.9157 14.9406 15.2575C15.156 16.0305 16.0567 16.2499 16.6119 15.6769C17.4342 14.8286 18.2655 13.9892 19.0927 13.1458C19.6948 12.5317 20.2968 11.9172 20.8985 11.3023C21.5952 10.5902 22.2911 9.87729 22.9878 9.1648C23.1059 9.04425 23.2249 8.9246 23.3435 8.8045C23.6903 8.45367 23.7239 7.84278 23.3943 7.4766C22.998 7.03683 22.5852 6.61241 22.1756 6.18573C21.7965 5.79066 21.4134 5.39965 21.0303 5.00909C20.6733 4.64473 20.3132 4.28306 19.9553 3.91915C19.6147 3.57284 19.2754 3.22563 18.9356 2.87887C18.5154 2.44948 18.0951 2.01964 17.6744 1.5907C17.2511 1.15861 16.8198 0.734188 16.4057 0.29261C16.0363 -0.101559 15.3697 -0.0816927 15.0344 0.257392C14.6238 0.672782 14.5999 1.26381 14.995 1.68552C15.3378 2.0517 15.6957 2.40342 16.0465 2.76192C16.929 3.66449 17.8111 4.56797 18.6937 5.47054C19.1829 5.97081 19.6735 6.47018 20.1632 6.97046C20.1885 6.99574 20.2123 7.02329 20.257 7.07205Z" />
                                </svg>
                            </span>
                        </a>
                    </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
