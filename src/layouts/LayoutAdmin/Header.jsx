import React from "react";
import Logo from "../../logo-2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.css";
import "../../indexbackend.css";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="w-100">
          <div className="row">
            <div className="col-md-2">
              <div className="logo">
                <img src={Logo} alt="logo" />
                <h1 className="header_logo">Sneaker Shop</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div id="menumain">
                <ul class="root">
                  <li>
                    <Link to={{}}>Sản phẩm</Link>
                    <ul class="submenu">
                      <li>
                        <Link to={"/admin/san-pham"}>Tất cả sản phẩm</Link>
                      </li>
                      <li>
                        <Link to={"/admin/danh-muc-san-pham"}>Danh mục sản phẩm</Link>
                      </li>
                      <li>
                        <Link to={"/admin/thuong-hieu"}>Thương hiệu</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={{}}>Bài Viết</Link>
                    <ul class="submenu">
                      <li>
                        <Link to={"/admin/bai-viet"}>Tất cả bài viết</Link>
                      </li>
                      <li>
                        <Link to={"/admin/chu-de"}>Chủ Đề</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={{}}>Quản lý bán hàng</Link>
                    <ul class="submenu">
                      <li>
                        <Link to={"/admin/dat-hang"}>Đơn hàng</Link>
                      </li>
                      <li>
                        <Link to={"/admin/chi-tiet-dat-hang"}>Chi tiết đơn đạt hàng</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/admin/nguoi-dung"}>Khách hàng</Link>
                  </li>
                  <li>
                    <Link to={"/admin/banner"}>Quản lý banner</Link>
                  </li>
                  <li>
                    <Link to={"/admin/lien-he"}>Liên hệ</Link>
                  </li>
                  <li>
                    <Link to={"/admin/menu"}>Menu</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <form action="#">
                <input type="text" id="search" placeholder="Tìm kiếm" />
                <button type="submit">Tìm kiếm</button>
              </form>
            </div>
            <div className="col-md-1 mt-3 ">
              <p style={{marginRight:"50px"}}><IoPersonOutline style={{ fontSize: "30px"}} /> Login</p>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </header>
    </>
  );
};

export default Header;
