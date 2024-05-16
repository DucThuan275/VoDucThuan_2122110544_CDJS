import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Logo from "./logo-2.png";
import { BsFire } from "react-icons/bs";
import product from "./imgs/new5.png";
import New_collect from "./imgs/new_collect.jpg";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Sliders from "./Component/Sliders";
import CustomerPolicy from "./Component/CustomerPolicy";
import Database from "./data_fake.json";
import ProductsItems from "./Component/ProductsItems";
function App() {
  const listproducts = Database.products;
  return (
    <>
      <header>
        <div class="logo">
          <img src={Logo} alt="logo" />
          <h1 class="header_logo">Sneaker Shop</h1>
        </div>
        <nav class="nav" id="nav-menu">
          <i data-feather="x" class="close" id="close-menu"></i>
          <ul class="nav_list">
            <li class="nav_item">
              <a href="" class="nav_link">
                Home
              </a>
            </li>
            <li class="nav_item">
              <a href="" class="nav_link">
                About
              </a>
            </li>
            <li class="nav_item">
              <a href="" class="nav_link">
                Product
              </a>
            </li>
            <li class="nav_item">
              <a href="" class="nav_link">
                Contact
              </a>
            </li>
            <li class="nav_item">
              <a href="" class="nav_link sale">
                SALE <BsFire />
              </a>
            </li>
          </ul>
        </nav>
        <form action="#">
          <input type="text" id="search" placeholder="Tìm kiếm" />
          <button type="submit">Tìm kiếm</button>
        </form>

        <div className="col-md-2 mt-6">
          <IoMdHeartEmpty style={{ fontSize: "30px", marginRight: "30px" }} />
          <PiShoppingCartSimple
            style={{ fontSize: "30px", marginRight: "30px" }}
          />
          <IoPersonOutline style={{ fontSize: "30px" }} />
        </div>
      </header>

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

        <h2 class="product-title">Sản Phẩm Mới</h2>
        <div class="container">
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p class="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p class="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        <h2 class="product-title">Sản Phẩm Bán Chạy</h2>
        <div class="row">
          <div class="col-md-6">
            <img
              src={New_collect}
              alt="Ảnh sản phẩm"
              class="img-fluid"
              style={{ width: "700px", marginLeft: "100px" }}
            />
          </div>

          <div class="col-md-6">
            <div class="row">
              <div class="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p class="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  class="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button class="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" class="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
              <div class="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p class="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  class="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button class="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" class="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p class="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  class="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button class="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" class="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
              <div class="col-md-5 product-detail">
                <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
                <h2>Tên sản phẩm</h2>
                <p>Mô tả sản phẩm</p>
                <p class="price">Giá: 100.000 VND</p>
                <p>Lựa chọn màu sắc</p>
                <button
                  class="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-color="red"
                ></button>
                <button class="btn btn-primary" data-color="blue"></button>
                <div>
                  <button type="button" class="btn btn-primary">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="product-title">Xu Hướng Hiện Nay</h2>
        <div class="container">
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p class="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p class="price">Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
          <div class="col-md-3 product-detail">
            <img src={product} alt="Ảnh sản phẩm" class="img-fluid" />
            <h2>Tên sản phẩm</h2>
            <p>Mô tả sản phẩm</p>
            <p>Giá: 100.000 VND</p>
            <p>Lựa chọn màu sắc</p>
            <button
              class="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-color="red"
            ></button>
            <button class="btn btn-primary" data-color="blue"></button>
            <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="footer-content">
          <div class="footer-main">
            <h2>Sneaker Store</h2>
            <h2>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h2>
            <h2>Hotline: 0392321224</h2>
            <p>
              Address: VP: 214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ Chí
              Minh
            </p>
          </div>
          <div class="links">
            <p>Information</p>
            <a href="" class="link">
              Our Company
            </a>
            <a href="" class="link">
              About Us
            </a>
            <a href="" class="link">
              Blog
            </a>
          </div>
          <div class="links">
            <p>Helpful Links</p>
            <a href="" class="link">
              Services{" "}
            </a>
            <a href="" class="link">
              Support
            </a>
            <a href="" class="link">
              Terms & Condition
            </a>
          </div>
          <div class="links">
            <p>Navigation</p>
            <a href="" class="link">
              Home
            </a>
            <a href="" class="link">
              About
            </a>
            <a href="" class="link">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
