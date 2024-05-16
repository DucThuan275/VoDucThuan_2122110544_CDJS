import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Logo from "./logo-2.png";
import { BsFire } from "react-icons/bs";
import slider_1 from "./imgs/slider_1.webp";
import slider_2 from "./imgs/slider_2.webp";
import slider_3 from "./imgs/slider_3.webp";
import product from "./imgs/new5.png";
import New_collect from "./imgs/new_collect.jpg";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
function App() {
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
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider_1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider_2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider_3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
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
