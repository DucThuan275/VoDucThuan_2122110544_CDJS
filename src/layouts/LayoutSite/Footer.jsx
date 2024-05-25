import React from "react";
import {
  FaTelegram,
  FaFacebookMessenger,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import CustomerContact from "../../Component/CustomerContact";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-main">
                <h2 style={{color:"#0FB587"}}>Sneaker Shop</h2>
                <h2>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h2>
                <h2>Hotline: 0392321224</h2>
                <p>
                  Address: VP: 214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ
                  Chí Minh
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="links">
                <p style={{color:"#0FB587"}}>Về Chúng Tôi</p>
                <a href="" className="link">
                  Home
                </a>
                <a href="" className="link">
                  About
                </a>
                <a href="" className="link">
                  Product
                </a>
                <a href="" className="link">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="links">
                <p style={{color:"#0FB587"}}>Hỗ Trợ Khách Hàng</p>
                <a href="" className="link">
                  Đơn hàng
                </a>
                <a href="" className="link">
                  Chính sách giao hàng
                </a>
                <a href="" className="link">
                  Chính sách đổi trả
                </a>
                <a href="" className="link">
                  Chính sách bán hàng
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="links">
                <p style={{color:"#0FB587"}}>Theo Dõi Chúng Tôi</p>
                <div className="row">
                  <div className="col-md-4">
                    <a href="" className="link">
                      <FaFacebook
                        style={{ fontSize: "30px", marginRight: "30px" }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="" className="link">
                      <FaFacebookMessenger
                        style={{ fontSize: "30px", marginRight: "30px" }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="" className="link">
                      <FaTelegram
                        style={{ fontSize: "30px", marginRight: "30px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ color: "#fff", borderTop: "1px solid #FFF", borderBottom: "1px solid #FFF" }}
          >
            <div className="col-md-6 mt-5 mb-3">
              <h5 style={{color:"#0FB587"}}>Đăng Ký Để Nhận Tin</h5>
              <p>Bạn có muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</p>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Nhập địa chỉ email"
                  />
                  <small id="emailHelp" class="form-text text-light">
                    Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ
                    ai.
                  </small>
                </div>
                <button type="submit" class="btn btn-success">
                  Gửi
                </button>
              </form>
            </div>
            <div className="col-md-6 mt-5">
              <div className="row">
                <div className="col-md-4">
                  <CustomerContact
                    icon={
                      <FaPhone style={{ fontSize: "40px", color: "#fff" }} />
                    }
                    title="Phone Number"
                    desc="0392321224"
                  />
                </div>
                <div className="col-md-4">
                  <CustomerContact
                    icon={
                      <IoLocation style={{ fontSize: "40px", color: "#fff" }} />
                    }
                    title="Location"
                    desc="214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ Chí Minh"
                  />
                </div>
                <div className="col-md-4">
                  <CustomerContact
                    icon={
                      <MdEmail style={{ fontSize: "40px", color: "#fff" }} />
                    }
                    title="Email Address"
                    desc="voducthuan2705@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="container mt-3" style={{backgroundColor:"#0A402B"}}>
            <p style={{color:"#fff"}}>@ Bản quyền thuộc về Võ Đức Thuận | Thiết kế bởi Thuận</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
