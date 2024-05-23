import React from "react";
import { Outlet } from "react-router-dom";
import product from "../../imgs/new5.png";
import New_collect from "../../imgs/new_collect.jpg";
import CustomerPolicy from "../../Component/CustomerPolicy";
import ProductsItems from "../../Component/ProductsItems";
import Database from "../../data_fake.json";
import Header from "./Header";
import Footer from "./Footer";
import Sliders from "../../Component/Sliders";

const Home = () => {
  const listproducts = Database.products;
  return (
    <>
    <Header/>
      <Outlet />
      <main>
        <div className="row slider">
          <Sliders />
        </div>
        <div className="customer_policy mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <CustomerPolicy
                  image="https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/ser_1.png?1713594904727"
                  title="Giao hàng siêu tốc"
                  desc="Giao hàng trong 24h"
                />
              </div>
              <div className="col-md-3">
                <CustomerPolicy
                  image="https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/ser_2.png?1713594904727"
                  title="Tư vấn miễn phí"
                  desc="Đội ngũ tư vấn tận tình"
                />
              </div>
              <div className="col-md-3">
                <CustomerPolicy
                  image="https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/ser_3.png?1713594904727"
                  title="Thanh toán"
                  desc="Thanh toán an toàn"
                />
              </div>
              <div className="col-md-3">
                <CustomerPolicy
                  image="https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/ser_4.png?1713594904727"
                  title="Giải pháp quà tặng"
                  desc="Dành cho doanh nghiệp"
                />
              </div>
            </div>
          </div>
          <hr />
        </div>

        <h2 className="text-center mt-3">Giày Nam Thời Trang</h2>
        <div className="new_collect">
          <div className="container">
            <div className="row">
              {listproducts.map((pt, index) => {
                return (
                  <div className="col-md-3 mt-4" key={index}>
                    <ProductsItems products={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <h2 className="product-title">Sản Phẩm Mới</h2>
        <div className="container">
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p className="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p className="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        <h2 className="product-title">Sản Phẩm Bán Chạy</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src={New_collect}
              alt="Ảnh sản phẩm"
              className="img-fluid"
              style={{ width: "620px", marginLeft: "100px" }}
            />
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p className="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button className="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" className="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
              <div className="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p className="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button className="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" className="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p className="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button className="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" className="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
              <div className="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p className="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button className="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" className="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="product-title">Xu Hướng Hiện Nay</h2>
        <div className="container">
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p className="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p className="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" className="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button className="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" className="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </>
  );
};

export default Home;
