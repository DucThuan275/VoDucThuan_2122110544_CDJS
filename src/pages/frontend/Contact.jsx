import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerContact from '../../Component/CustomerContact';
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Header from '../../layouts/LayoutSite/Header';
import Footer from '../../layouts/LayoutSite/Footer';
const Contact = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <hr/>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <CustomerContact
                  icon = {<FaPhone style={{fontSize:"40px", color:"green"}}/>}
                  title="Phone Number"
                  desc="0392321224"
                />
            </div>
            <div className="col-md-4">
            <CustomerContact
                  icon = {<IoLocation style={{fontSize:"40px", color:"green"}}/>}
                  title="Location"
                  desc="214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ Chí Minh"
                />
            </div>
            <div className="col-md-4">
            <CustomerContact
                  icon = {<MdEmail style={{fontSize:"40px", color:"green"}}/>}
                  title="Email Address"
                  desc="voducthuan2705@gmail.com"
                />
            </div>
          </div>
          </div>
          <div className="container mt-2">
          <div className="row">
            <div className="col-md">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407468411!3d10.830680489321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgVMSDbmcgTmjGoW4gUGjDuiwgUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692683712719!5m2!1svi!2s"
                  style={{width:"700px", height:"550px", border:"0px", allowfullscreen:"", loading:"lady"}}>
               </iframe>
            </div>
            <div className="col-md mr-5">
          <h2 >LIÊN HỆ CHÚNG TÔI</h2>
          <p>Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất</p>

        <form action="" method="post">
          <div className="form-group">
            <label for="ten">Họ và tên *</label>
            <input type="text" className="form-control" id="ten" placeholder="Nhập họ và tên" required/>
          </div>

          <div className="form-group">
            <label for="email">Email *</label>
            <input type="email" className="form-control" id="email" placeholder="Nhập email" required/>
          </div>

          <div className="form-group">
            <label for="dienthoai">Số điện thoại *</label>
            <input type="tel" className="form-control" id="dienthoai" placeholder="Nhập số điện thoại" required/>
          </div>

          <div className="form-group">
            <label for="noidung">Nội dung *</label>
            <textarea className="form-control" id="noidung" rows="5" placeholder="Nhập nội dung" required></textarea>
          </div>

          <button type="submit" className="btn btn-success mt-3">Gửi</button>
        </form>
      </div>
            </div>
         </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Contact;
