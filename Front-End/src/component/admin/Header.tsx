import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="admin-dashboard.html" className="header-logo">
            <img
              className="img-fluid rounded-normal"
              alt=""
            />
            <div className="logo-title">
              <span className="text-primary text-uppercase">BookStore</span>
            </div>
          </a>
          <div className="iq-menu-bt-sidebar">
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li>
                <a href="dashboard">
                  <i className="las la-home iq-arrow-left"></i>Bảng Điều Khiển
                </a>
              </li>
              <li>
                <a href="list-cate-book">
                  <i className="ri-record-circle-line"></i>Danh Mục Sách
                </a>
              </li>
              <li>
                <Link to="list-author">
                  <i className="ri-record-circle-line"></i>Tác Giả
                </Link>
              </li>
              <li>
                <Link to="list-book">
                  <i className="ri-record-circle-line"></i>Sách
                </Link>
              </li>
              <li>
                <a href="sign-in.html">
                  <i className="ri-record-circle-line"></i>Đăng Xuất
                </a>
              </li>
            </ul>
          </nav>
          <div id="sidebar-bottom" className="p-3 position-relative">
            <div className="iq-card">
              <div className="iq-card-body">
                <div className="sidebarbottom-content">
                  <button
                    type="submit"
                    className="btn w-100 btn-primary mt-4 view-more"
                  >
                    BookStore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars"></i>
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between">
                <a href="index.html" className="header-logo">
                  <img
                    className="img-fluid rounded-normal"
                    alt=""
                  />
                  <div className="logo-title">
                    <span className="text-primary text-uppercase">
                      NhasachTV
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="navbar-breadcrumb">
              <h5 className="mb-0"></h5>
            </div>
            <div className="iq-search-bar">
              <form action="#" className="searchbox">
                <input
                  type="text"
                  className="text search-input"
                  placeholder="Tìm kiếm sản phẩm..."
                />
                <a className="search-link" href="#">
                  <i className="ri-search-line"></i>
                </a>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-list">
                <li className="nav-item nav-icon search-content">
                  <a
                    href="#"
                    className="search-toggle iq-waves-effect text-gray rounded"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                  <form action="#" className="search-box p-0">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Type here to search..."
                    />
                    <a className="search-link" href="#">
                      <i className="ri-search-line"></i>
                    </a>
                  </form>
                </li>
                <li className="nav-item nav-icon">
                  <a
                    href="#"
                    className="search-toggle iq-waves-effect text-gray rounded"
                  >
                    <i className="ri-notification-2-line"></i>
                    <span className="bg-primary dots"></span>
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white">
                            Thông Báo
                            <small className="badge  badge-light float-right pt-1">
                              4
                            </small>
                          </h5>
                        </div>
                        {/* <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/01.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">
                                Đơn hàng giao thành công
                              </h6>
                              <small className="float-right font-size-12">
                                Just Now
                              </small>
                              <p className="mb-0">95.000đ</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/02.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">
                                Đơn hàng giao thành công
                              </h6>
                              <small className="float-right font-size-12">
                                5 days ago
                              </small>
                              <p className="mb-0">255.000đ</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/03.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">
                                Đơn hàng giao thành công
                              </h6>
                              <small className="float-right font-size-12">
                                2 days ago
                              </small>
                              <p className="mb-0">79.000đ</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/04.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">
                                Đơn hàng #7979 giao không thành công
                              </h6>
                              <small className="float-right font-size-12">
                                3 days ago
                              </small>
                              <p className="mb-0">100.000đ</p>
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item nav-icon dropdown">
                  <a
                    href="#"
                    className="search-toggle iq-waves-effect text-gray rounded"
                  >
                    <i className="ri-mail-line"></i>
                    <span className="bg-primary dots"></span>
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white">
                            Tin Nhắn
                            <small className="badge  badge-light float-right pt-1">
                              5
                            </small>
                          </h5>
                        </div>
                        {/* <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/01.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">QT Shop</h6>
                              <small className="float-left font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/02.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Tran Thuan Store</h6>
                              <small className="float-left font-size-12">
                                20 Apr
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/03.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Hoang Vu Book</h6>
                              <small className="float-left font-size-12">
                                30 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/04.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Quang Minh Book</h6>
                              <small className="float-left font-size-12">
                                12 Sep
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src="images/user/05.jpg"
                                alt=""
                              />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">TV Team</h6>
                              <small className="float-left font-size-12">
                                5 Dec
                              </small>
                            </div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="line-height pt-3">
                  <a
                    href="#"
                    className="search-toggle iq-waves-effect d-flex align-items-center"
                  >
                    <img
                      className="img-fluid rounded-circle mr-3"
                      alt="user"
                    />
                    <div className="caption">
                      <h6 className="mb-1 line-height">Hà Huy Vũ</h6>
                      <p className="mb-0 text-primary">Tài Khoản</p>
                    </div>
                  </a>
                  <div className="iq-sub-dropdown iq-user-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white line-height">
                            Xin Chào Hà Huy Vũ
                          </h5>
                        </div>
                        <a
                          href="profile.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-primary">
                              <i className="ri-file-user-line"></i>
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Tài khoản của tôi</h6>
                            </div>
                          </div>
                        </a>
                        <a
                          href="profile-edit.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-primary">
                              <i className="ri-profile-line"></i>
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Sổ địa chỉ</h6>
                            </div>
                          </div>
                        </a>
                        <a
                          href="account-setting.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-primary">
                              <i className="ri-account-box-line"></i>
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Đơn hàng của tôi</h6>
                            </div>
                          </div>
                        </a>
                        <a
                          href="wishlist.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-primary">
                              <i className="ri-heart-line"></i>
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Yêu Thích</h6>
                            </div>
                          </div>
                        </a>
                        <div className="d-inline-block w-100 text-center p-3">
                          <a
                            className="bg-primary iq-sign-btn"
                            href="sign-in.html"
                            role="button"
                          >
                            Sign out<i className="ri-login-box-line ml-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
